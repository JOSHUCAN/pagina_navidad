/* ======================
   CUENTA REGRESIVA
====================== */
const navidad = new Date("December 25, 2025 00:00:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = navidad - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}, 1000);

/* ======================
   ANIMACIÓN DE NIEVE
====================== */
const canvas = document.getElementById("nieve");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let copos = [];

for (let i = 0; i < 150; i++) {
    copos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() + 1
    });
}

function dibujarNieve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let i = 0; i < copos.length; i++) {
        const c = copos[i];
        ctx.moveTo(c.x, c.y);
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    }

    ctx.fill();
    moverNieve();
}

let angulo = 0;

function moverNieve() {
    angulo += 0.01;
    for (let i = 0; i < copos.length; i++) {
        const c = copos[i];
        c.y += Math.pow(c.d, 2) + 1;
        c.x += Math.sin(angulo) * 2;

        if (c.y > canvas.height) {
            copos[i] = {
                x: Math.random() * canvas.width,
                y: 0,
                r: c.r,
                d: c.d
            };
        }
    }
}

setInterval(dibujarNieve, 30);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
