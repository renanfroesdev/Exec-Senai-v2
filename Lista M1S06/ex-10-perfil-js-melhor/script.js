x

function sendmsg() {
    msg = prompt("Digite uma mensagem: ")
    document.getElementById('resmsg').innerText = msg
    resposta = document.getElementById('box-msg')
    document.getElementById('escrevamsg').innerText = "*** Mensagem Enviada ***"
    resposta.style.cssText = 
    'border: 5px solid white;' +
    'border-radius: 10px;' +
    'background-color: rgb(143, 253, 143);'
}
