let targetX = window.innerWidth / 2; // Startposition
    let targetY = window.innerHeight / 2;
    let clicks = 0;
    let currentX = targetX; // Anfangsposition des Gradients
    let currentY = targetY;

    const speed = 0.01; // Wie stark die Bewegung verlangsamt wird

    document.body.addEventListener('mousemove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    });

    function animate() {
      // Positionen interpolieren
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      // Hintergrund aktualisieren
      document.body.style.background = `radial-gradient(90vh 90vh at ${currentX}px ${currentY}px, rgb(0, 0, 255, 1) 0%, black 100%)`;

      requestAnimationFrame(animate); // Endlosschleife für Animation
    }

    function countUp() {
      clicks = clicks + 1;
      if (clicks == 3) {
        console.log("Allahu Akbar!");
        window.location.replace("/secret-weapon");
      }
    }

    animate(); // Animation starten