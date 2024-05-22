// theme.js

// Function to toggle between dark and light themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
}

// Function to set initial theme based on user preference
function setInitialTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark' || (prefersDarkScheme && !localStorage.getItem('theme'))) {
        body.classList.add('dark');
    }
}

// Event listener for theme buttons
document.addEventListener('DOMContentLoaded', function() {
    setInitialTheme();

    const lightThemeBtn = document.getElementById('lightThemeBtn');
    const darkThemeBtn = document.getElementById('darkThemeBtn');

    lightThemeBtn.addEventListener('click', () => {
        toggleTheme();
        localStorage.setItem('theme', 'light');
    });

    darkThemeBtn.addEventListener('click', () => {
        toggleTheme();
        localStorage.setItem('theme', 'dark');
    });
});
