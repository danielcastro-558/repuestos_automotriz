const form = document.querySelector('form');
const inputEmail = document.getElementById('email');
const errorEmail = document.getElementById('mensajeError');
const exitoEmail = document.getElementById('mensajeExito');

let validarCorreo = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || asunto === '' || message === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (validarCorreo === false) {
        alert("El correo electronico es invalido");
        return;
    }

    alert('Formulario enviado exitosamente');
    exitoEmail.style.display = "none";
    errorEmail.style.display = "none";
    form.reset();
});

inputEmail.addEventListener("input", (e) => {
    const datoActual = e.target.value.trim();

    if (datoActual === "") {
        errorEmail.style.display = "none";
        exitoEmail.style.display = "none";
        return;
    }

    if (datoActual.includes("@gmail.com") ||
        datoActual.includes("@hotmail.com") ||
        datoActual.includes("@outlook.com")) {
        exitoEmail.style.display = "inline";
        errorEmail.style.display = "none";
        validarCorreo = true;
    } else {
        exitoEmail.style.display = "none";
        errorEmail.style.display = "inline";
        validarCorreo = false;
    }

});
