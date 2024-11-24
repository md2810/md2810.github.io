// Blauer Fleck mit weicherer Bewegung
const background = document.getElementById('background');
let mouseX = 0, mouseY = 0; // Zielposition der Maus
let currentX = 0, currentY = 0; // Aktuelle Position des Flecks
const dampeningFactor = 0.5; // Je kleiner, desto langsamer folgt der Fleck

// Eventlistener für die Mausbewegung
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Funktion zum Aktualisieren des blauen Flecks
function updateBackground() {
    // Position schrittweise anpassen
    currentX += (mouseX - currentX) * dampeningFactor;
    currentY += (mouseY - currentY) * dampeningFactor;

    // Hintergrund mit weicher Bewegung aktualisieren
    background.style.background = `
        radial-gradient(
            circle at ${currentX}px ${currentY}px, 
            rgba(30, 60, 100, 0.4) 0%, 
            rgba(0, 0, 0, 0.5) 60%
        ),
        rgba(0, 0, 0, 1)
    `;

    // Animationsschleife
    requestAnimationFrame(updateBackground);
}

// Animation starten
updateBackground();
