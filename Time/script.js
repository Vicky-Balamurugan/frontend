// script.js

document.addEventListener('DOMContentLoaded', function () {
    const adviceMessages = [
        "Think about what you really want to achieve with this prompt.",
        "Be specific! Clear prompts yield better responses.",
        "Include context to guide the model effectively.",
        "Consider asking open-ended questions for detailed answers.",
        "Experiment with different styles to see varied results."
    ];

    const randomAdvice = adviceMessages[Math.floor(Math.random() * adviceMessages.length)];
    document.getElementById('prompt-advice').innerText = randomAdvice;
});
