// CUENTA REGRESIVA
const fechaNavidad = new Date("December 25, 2025 00:00:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const t = fechaNavidad - ahora;

    document.getElementById("dias").textContent =
        Math.floor(t / (1000 * 60 * 60 * 24));
    document.getElementById("horas").textContent =
        Math.floor((t / (1000 * 60 * 60)) % 24);
    document.getElementById("minutos").textContent =
        Math.floor((t / (1000 * 60)) % 60);
    document.getElementById("segundos").textContent =
        Math.floor((t / 1000) % 60);
}, 1000);

// NIEVE
const canvas = document.getElementById("nieve");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let copos = Array.from({ length: 220 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    s: Math.random() + 0.5
}));

function animarNieve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    copos.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        c.y += c.s;
        if (c.y > canvas.height) {
            c.y = -5;
            c.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animarNieve);
}

animarNieve();

