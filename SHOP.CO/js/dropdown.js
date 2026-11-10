export default function() {
    const button = document.querySelector('.shops__btn');
    const container = document.querySelector('.shops__container');
    const arrow = document.querySelector('.shop-arrow-icon');

    // Клик по кнопке "Магазины"
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        container.classList.toggle('shops__container-active');
        arrow.classList.toggle('arrow-rotated');
    });

    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !container.contains(event.target)) {
            container.classList.remove('shops__container-active');
            arrow.classList.remove('arrow-rotated');
        }
    });
};