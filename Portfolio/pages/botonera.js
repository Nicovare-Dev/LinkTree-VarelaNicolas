
document.addEventListener('DOMContentLoaded', function () {
    const audio1 = new Audio('sonidos/fn-p90-sound-effect-265718.mp3');
    const audio2 = new Audio('sonidos/sound-effects-single-gun-shot-247124.mp3');
    const audio3 = new Audio('sonidos/gun-shot-sound-effect-224087.mp3');
    const audio4 = new Audio('sonidos/m240-sound-effect-331683.mp3');

    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');
    const boton4 = document.getElementById('boton4');

    const audios = [audio1, audio2, audio3, audio4];
    const botonesArr = [boton1, boton2, boton3, boton4];

    botonesArr.forEach((boton, i) => {
        boton.addEventListener('click', function () {
            audios[i].currentTime = 0;
            audios[i].play();
        });
    });

    const botones = document.querySelectorAll('.boton-sonido');
    botones.forEach(boton => {
        boton.addEventListener('mousedown', function () {
            this.style.opacity = '0.8';
        });

        boton.addEventListener('mouseup', function () {
            this.style.opacity = '1';
        });

        boton.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
        });
    });
});