
function simuladorSalario() {
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_COMISSAO = 0.1;
    const META_VENDA = 1000;

    var nomeVendedor = document.getElementById('nomeVendedor').value;
    var totalVendas = document.getElementById('totalVendas').value;
 

    if (totalVendas >= META_VENDA) {
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
        var comissao = (totalVendas * PERCENTUAL_COMISSAO);
        exibirMensagemSucesso(nomeVendedor, salarioBruto, comissao);
        }else{
            exibirMensagemErro();
        }
/*
    <div class="col-sm-12 col-md-9 col-lg-9 pt-30">
        <div class="alert alert-success" role="alert">
            <h3> A simple success alert—check it out! </h3>
        </div>
    </div>
    <div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
    </div>
    */

    function exibirMensagemSucesso(nome, salario, comissao){
        let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
                    '<div class="alert alert-success" role="alert">' +
                    '<h4>'+ nome +', seu salário bruto será de '+ salario +' reais.<br> Você recebeu '+ comissao +' reais de comissão</h4>' +
                    '</div>' +
                '</div>';  
                let mensagemResultado = document.getElementById('mensagemResultado');
                mensagemResultado.className = 'row visible';
                mensagemResultado.innerHTML = html;

    }

    function exibirMensagemErro(){
        let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
                    '<div class="alert alert-danger" role="alert">' +
                    '<h4> Você não alcançou a meta de vendas desejada</h4>' +
                    '</div>' +
                    '</div>';
                    let mensagemResultado = document.getElementById('mensagemResultado');
                    mensagemResultado.className = 'row visible';
                    mensagemResultado.innerHTML = html;
    }
}
