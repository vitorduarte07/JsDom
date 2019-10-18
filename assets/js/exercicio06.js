function LerDoisValores() {
    var valorUm = document.getElementById('valorUm').value;
    var valorDois = document.getElementById('valorDois').value;

    if (valorUm > valorDois) {
        exibirMensagemSucesso();
    }else if (valorUm < valorDois) {
        exibirMensagemSucesso2();
    }else{
        exibirMensagemErro();
    }

}

function exibirMensagemSucesso(){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
    '<div class="alert alert-success" role="alert">' +
    '<h4>Valor 1 é maior do que o Valor 2</h4>' +
    '</div>' +
    '</div>';  
    let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
}

function exibirMensagemSucesso2(){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
    '<div class="alert alert-success" role="alert">' +
    '<h4>Valor 2 é maior do que o Valor 1</h4>' +
    '</div>' +
    '</div>';  
    let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
}


function exibirMensagemErro() {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
    '<div class="alert alert-danger" role="alert">' +
    '<h4>Não é permitido digitar valores iguais, por favor digite um valor diferente para o valor 2 </h4>' +
    '</div>' +
    '</div>';
    let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
}