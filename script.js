const formulario = document.getElementById("formularioContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();
});
