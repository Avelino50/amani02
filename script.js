// O objetivo deste script é tornar a navegação (scroll) mais suave.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão do link, que é pular de uma vez
        e.preventDefault();

        // Encontra o elemento (seção) cujo ID corresponde ao link (href)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Usa o método 'scrollIntoView' para rolar até o elemento
            // O parâmetro 'behavior: smooth' garante o efeito suave
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});