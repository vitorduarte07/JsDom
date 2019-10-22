$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  var vendedor = {}; //objeto não inicializado

  var encargos = { //objeto inicializado com propriedades.
      inss: null,
      irrf: null
  };

  function calcularSalarioLiquido(){
      vendedor.nome = document.getElementById('nomeVendedor').value;
      vendedor.salarioBase = parseFloat(document.getElementById('salarioBase').value);
      vendedor.totalVendas = parseFloat(document.getElementById('totalVendas').value);
    vendedor.salarioBruto = parseFloat(CalcularSalarioBruto(vendedor.salarioBase, vendedor.totalVendas));
    console.log(vendedor.salarioBruto);
    encargos.inss = calcularINSS(vendedor.salarioBruto);
    encargos.irrf = calcularIRRF(vendedor.salarioBruto);
    console.log(encargos);
  }

  function CalcularSalarioBruto(salario, vendas){
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
      if (salario <= 1903.98) {
        return 0.075 * salario - calcularINSS(salario);
      }else if (salario <= 2826.65){
        return 0.15 * salario - calcularINSS(salario);
      }else if (salarioBruto <= 3751.05) {
        return 0.225 * salario - calcularINSS(salario);
      }else{
          return 0.275 / 100 * salario - calcularINSS(salario);
      }
  }
