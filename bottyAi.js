class BottyAI {
    constructor() {
        this.memory = {}; // Store memory of interactions
    }

    // Method to handle incoming messages
    processMessage(message) {
        const chatbox = document.getElementById('chatbox');
        let response = '';
        const lowerMessage = message.toLowerCase();

        // Check if the name "botty" is mentioned
        if (lowerMessage.includes('botty')) {
            // Extract message after "botty"
            const content = message.replace(/botty/i, '').trim();

            if (content) {
                // Store what the user said to Botty in memory
                this.memory.lastMessage = content;
                response = `You said: "${content}". I remember that!`;
            } else {
                // Respond to the name call with a default response
                response = 'Hello! You called me?';
            }
        } else {
            response = 'I only respond to my name, Botty!';
        }

        // Display the interaction in the chatbox
        chatbox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
        chatbox.innerHTML += `<div><strong>Botty:</strong> ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Method to access Botty's memory
    recallMemory() {
        return this.memory.lastMessage || 'I don\'t remember anything yet.';
    }
}

window.BottyAI = BottyAI; // Expose BottyAI to the global scope
