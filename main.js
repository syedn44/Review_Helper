const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });

const downloadProgressContainer = document.getElementById('download-progress-container');
const downloadProgressBar = document.getElementById('download-progress');
const downloadProgressText = document.getElementById('download-progress-text');

const reviewInput = document.getElementById('review-input');
const aiThinkingState = document.getElementById('ai-thinking-state');
const aiSuggestionBoxContainer = document.getElementById('ai-suggestion-box-container');
const aiSuggestionBox = document.getElementById('ai-suggestion-box');

// Listen to worker messages
worker.addEventListener('message', (e) => {
    const { type, data } = e.data;
    
    if (type === 'progress') {
        const percent = Math.round(data.progress * 100);
        if (downloadProgressBar) downloadProgressBar.style.width = `${percent}%`;
        if (downloadProgressText) downloadProgressText.textContent = `${percent}%`;
        
        if (percent === 100) {
            setTimeout(() => {
                if (downloadProgressContainer) {
                    downloadProgressContainer.style.display = 'none';
                }
            }, 500);
        }
    } else if (type === 'ready') {
        console.log('Engine ready');
    } else if (type === 'response') {
        aiThinkingState.classList.remove('flex');
        aiThinkingState.classList.add('hidden');
        
        // Hide previous suggestion if the response implies clear, else show
        if (data.text) {
            aiSuggestionBox.textContent = data.text;
            aiSuggestionBoxContainer.classList.remove('hidden');
        }
    } else if (type === 'error') {
        console.error("Worker error: ", data);
        aiThinkingState.classList.remove('flex');
        aiThinkingState.classList.add('hidden');
        aiSuggestionBox.textContent = "Error loading model: " + data;
        aiSuggestionBoxContainer.classList.remove('hidden');
    }
});

// Debounce logic
let timeoutId;

reviewInput.addEventListener('input', () => {
    // Hide previous suggestions
    aiSuggestionBoxContainer.classList.add('hidden');
    aiThinkingState.classList.add('hidden');
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
        const text = reviewInput.value.trim();
        if (!text) return;
        
        // Show thinking state
        aiThinkingState.classList.remove('hidden');
        aiThinkingState.classList.add('flex');
        
        worker.postMessage({ type: 'evaluate', text });
    }, 1500);
});
