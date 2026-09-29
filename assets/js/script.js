document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos principales dentro del hero
    const heroElements = document.querySelectorAll('.hero > *');
    
    // Configuramos el estado inicial invisible
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        // Asignamos una transición escalonada (delay basado en el índice)
        el.style.transition = `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`;
    });

    // Desatamos la animación un instante después de cargar
    setTimeout(() => {
        heroElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});