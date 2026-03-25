import { CreateMLCEngine } from '@mlc-ai/web-llm';

let engine;

async function initEngine() {
    try {
        engine = await CreateMLCEngine('SmolLM2-360M-Instruct-q0f16-MLC', {
            initProgressCallback: (progress) => {
                self.postMessage({ type: 'progress', data: progress });
            }
        });
        self.postMessage({ type: 'ready' });
    } catch(err) {
        console.error("Engine Init Error: ", err);
        self.postMessage({ type: 'error', data: err.toString() });
    }
}

// Start initialization immediately
initEngine();

self.addEventListener('message', async (e) => {
    if (e.data.type === 'evaluate') {
        if (!engine) {
            self.postMessage({ type: 'response', data: { text: "Engine is still loading..." } });
            return;
        }

        const userText = e.data.text;
        
        const messages = [
            { role: 'system', content: 'You are a helpful writing coach for a product review website. Your only job is to evaluate draft product reviews and suggest one specific improvement. Keep your answer under two sentences. Do not rewrite the review for the user.' },
            { role: 'user', content: 'these shoes are bad.' },
            { role: 'assistant', content: 'Try being more specific about why you didn\'t like them. Was it the fit, the material, or the durability?' },
            { role: 'user', content: 'i love it!' },
            { role: 'assistant', content: 'Great start! Adding details about how you use the product will make this review much more helpful for other shoppers.' },
            { role: 'user', content: '"The battery died after an hour"' },
            { role: 'assistant', content: 'To make this review even more helpful, mention what activities you were using the device for during that hour, since heavy usage drains batteries much faster than standard use.' },
            { role: 'user', content: userText }
        ];

        let responseText = '';
        try {
            const completion = await engine.chat.completions.create({
                messages,
                stream: false,
                max_tokens: 150,
            });
            responseText = completion.choices[0].message.content;
        } catch (err) {
            console.error(err);
            responseText = "An error occurred while evaluating your review. Please try again.";
        }

        self.postMessage({ type: 'response', data: { text: responseText } });
    }
});
