const terminal = document.getElementById('terminal');
const messages = [
    'Initializing hacking',
    'Reading your files',
    'Password files Detected',
    'Sending all passwords and personal files to server',
    'Cleaning up'
];

let currentMessageIndex = 0;

function showMessageWithDots(message, callback) {
    const messageDiv = document.createElement('div');
    const dotsSpan = document.createElement('span');
    dotsSpan.className = 'blinking';
    messageDiv.textContent = message;
    messageDiv.appendChild(dotsSpan);
    terminal.appendChild(messageDiv);

    let dotCount = 0;
    const dotInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dotsSpan.textContent = '.'.repeat(dotCount);
    }, 500);

    const randomDelay = Math.random() * 6000 + 1000;
    setTimeout(() => {
        clearInterval(dotInterval);
        dotsSpan.textContent = '...';
        callback();
    }, randomDelay);
}

function showNextMessage() {
    if (currentMessageIndex < messages.length) {
        showMessageWithDots(messages[currentMessageIndex], () => {
            currentMessageIndex++;
            showNextMessage();
        });
    }
}

showNextMessage();
