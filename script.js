// Blauer Fleck, der der Maus folgt
const background = document.getElementById('background');
let mouseX = 0, mouseY = 0;

// Eventlistener für die Mausbewegung
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateBackground();
});

// Funktion zum Aktualisieren des blauen Flecks
function updateBackground() {
    background.style.background = `
        radial-gradient(
            circle at ${mouseX}px ${mouseY}px, 
            rgba(78, 204, 163, 0.3) 0%, 
            rgba(0, 0, 0, 0.5) 50%
        ),
        rgba(0, 0, 0, 1)
    `;
}
