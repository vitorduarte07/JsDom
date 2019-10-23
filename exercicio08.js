$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
var nomeVendedor;
var salarioBruto

var vendedor = {}; //objeto não inicializado

var encargos = { //objeto inicializado com propriedades.
    inss: null,
    irrf: null,
    nome: null,
    salarioBruto: null,
    salarioLiquido: null
};

function calcularSalarioLiquido(){
    vendedor.nome = document.getElementById('nomeVendedor').value;
    vendedor.salarioBase = parseFloat(document.getElementById('salarioBase').value);
    vendedor.totalVendas = parseFloat(document.getElementById('totalVendas').value);
  vendedor.salarioBruto = parseFloat(calcularSalarioBruto(vendedor.salarioBase, vendedor.totalVendas));
  console.log(vendedor.salarioBruto);
  encargos.inss = calcularINSS(vendedor.salarioBruto);
  encargos.irrf = calcularIRRF(vendedor.salarioBruto);
  encargos.nome = vendedor.nome = document.getElementById('nomeVendedor').value;
  encargos.salarioBruto = calcularSalarioBruto(vendedor.salarioBase, vendedor.totalVendas);
  encargos.salarioLiquido = simuladorSalarioLiquido();
  console.log(encargos);
  exibirMensagemSucesso();
 
}

function simuladorSalarioLiquido(){

  return encargos.salarioBruto - encargos.inss - encargos.irrf;
}

function calcularSalarioBruto(salario, vendas){
  const PERCENTUAL_COMISSAO = 0.10;
  return salario + vendas * PERCENTUAL_COMISSAO;
}

function calcularINSS(salario){
  const FAIXA_1 = 1751.81;
  const FAIXA_2 = 2919.72;

  if(salario <= FAIXA_1){
      return salario * 0.08;
  }else if( salario <= FAIXA_2){
      return salario * 0.09;
  }else{
      return salario * 0.11;
  }
}

function calcularIRRF(salario){
    if (salario >= 1903.98) {
      return 0.075 * (salario - calcularINSS(salario));
    }else if (salario >= 2826.65){
      return 0.15 * (salario - calcularINSS(salario));
    }else if (salario >= 3751.05) {
      return 0.225 * (salario - calcularINSS(salario));
    }else{
      return 0.275 * (salario - calcularINSS(salario));
    }
}

function exibirMensagemSucesso(){
  
  let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' +
  '<div class="alert alert-success" role="alert">' +
  '<h4>'+ encargos.nome +', o resultado da sua simulação está pronto!<br><br></h4>' +
  '<h4>Salário Bruto:'+ encargos.salarioBruto +'</h4>'+
  '<h4>DESCONTO INSS:'+ encargos.inss +'</h4>'+
  '<h4>DESCONTO DE IR:'+ encargos.irrf +'</h4><br><br>'+
  '<h4>Seu salário liquido será de: '+ encargos.salarioLiquido +'</h4>'+
  '</div>' +
  '</div>';  
  let mensagemResultado = document.getElementById('mensagemResultado');
      mensagemResultado.className = 'row visible';
      mensagemResultado.innerHTML = html;
}