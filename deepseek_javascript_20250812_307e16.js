document.addEventListener('DOMContentLoaded', function() {
    // Welcome text animation
    const welcomeText = "Welcome to GalexHunter";
    const welcomeElement = document.getElementById('welcome-text');
    
    // Typewriter effect
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});