import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.innerHTML = '¡Felicidades! ¡Adivinaste el número! <br><img src="https://i.makeagif.com/media/6-04-2016/-EmzU5.gif"/>';

} else if (numeroJugador < numeroSecreto) {
    mensaje.innerHTML = 'El número es más alto <br><img class="respuesta-img" src="https://i.gifer.com/origin/ff/ff28442677f10a696b93a6ac90ace3ea_w200.gif" />';
} else {
    mensaje.innerHTML = 'El número es más bajo <br><img class="respuesta-img" src="https://i.pinimg.com/originals/82/ed/30/82ed30521136fb22d77c7e554621d67c.gif" />';
}

});