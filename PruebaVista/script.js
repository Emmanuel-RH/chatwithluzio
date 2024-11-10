document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        addMessage(message, 'sent');
        messageInput.value = '';
        // Aquí puedes llamar a la API de ChatGPT y manejar la respuesta
        // Simularemos una respuesta de ChatGPT por ahora
        setTimeout(() => {
            addMessage('Esta es una respuesta de Luzio', 'received');
        }, 1000);
    }
}

function addMessage(text, type) {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    newMessage.textContent = text;
    messagesContainer.appendChild(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}