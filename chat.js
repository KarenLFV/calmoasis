function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.textContent = userMessage;
        chatBox.appendChild(messageElement);
        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
