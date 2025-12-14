function crearAnimacion() {
    const copo = document.createElement('div');
    copo.classList.add('snowflake');

    // Diferentes tipos de copos
    const copos = ['❄', '✦', '✧'];
    copo.textContent = copos[Math.floor(Math.random() * copos.length)];

    // Posición horizontal aleatoria
    copo.style.left = Math.random() * window.innerWidth + 'px';

    // Tamaño aleatorio
    const size = Math.random() * 18 + 12;
    copo.style.fontSize = size + 'px';

    // Opacidad aleatoria
    copo.style.opacity = Math.random() * 0.5 + 0.5;

    // Duración aleatoria de la caída
    const duration = Math.random() * 6 + 6;
    copo.style.animationDuration = duration + 's';

    // Pequeño retraso para variar la caída
    copo.style.animationDelay = Math.random() * 2 + 's';

    // Añadir al body
    document.body.appendChild(copo);

    // Remover después de la animación
    setTimeout(() => copo.remove(), (duration + 2) * 1000);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setInterval(crearAnimacion, 250);
});



