const botty = new BottyAI(); // Instantiate Botty

// Handle user input and call Botty's AI methods
document.getElementById('userInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userInput = event.target.value;
        botty.processMessage(userInput);
        event.target.value = ''; // Clear the input field
    }
});
