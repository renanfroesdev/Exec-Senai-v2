function sendmsg() {
    msg = prompt("Digite uma mensagem: ")
    document.getElementById('resmsg').innerText = msg
    document.getElementById('escrevamsg').innerText = "*** Mensagem Enviada ***"
}