// Simple interaction logging or animations can go here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully!");
    
    // Smooth fade-in effect for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
