const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

// create stars
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate();

/* MOUSE PARALLAX (KEEP THIS) */
document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll(".layer");

    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let planet1 = document.getElementById("planet1");
    let planet2 = document.getElementById("planet2");

    planet1.style.transform = `translateY(${scrollY * 0.3}px)`;
    planet2.style.transform = `translateY(${scrollY * -0.2}px)`;
});
