function createFallingElement() {
    const images = ["candy.png", "flower.png", "candy2.png" ]; // Add more if you want!
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("falling");
    
    // Set random position
    img.style.left = Math.random() * window.innerWidth + "px";

    // Set random size (optional)
    img.style.width = Math.random() * 30 + 20 + "px"; // Between 20px and 40px

    document.body.appendChild(img);

    // Remove the element after it falls
    setTimeout(() => { img.remove(); }, 5000);
}

function startFalling() {
    const interval = setInterval(createFallingElement, 300); // Creates every 300ms
    setTimeout(() => { clearInterval(interval); }, 10000); // Stops after 10s
}

// Start animation when the page loads
window.onload = startFalling;

document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");
    var toggleButton = document.getElementById("music-toggle");

    function toggleMusic() {
        if (music.muted) {
            music.muted = false;
            toggleButton.innerHTML = "♫⋆";
        } else {
            music.muted = true;
            toggleButton.innerHTML = "❚❚ ";
        }
    }

    // Try playing music when the page loads
    music.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction...");
    });

    // First user click anywhere starts music
    document.addEventListener("click", function () {
        music.play();
    }, { once: true });

    // Toggle music on button click
    toggleButton.addEventListener("click", toggleMusic);
});



document.addEventListener("DOMContentLoaded", function () {
    var openButton = document.getElementById("open-invitation");
    var inviteBox = document.getElementById("invite-box");

    openButton.addEventListener("click", function () {
        inviteBox.classList.remove("hidden"); // Show invitation
        openButton.style.display = "none";    // Hide the button
    });
});


