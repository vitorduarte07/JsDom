
function simuladorSalario(){
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_COMISSAO = 0.1;
    
    var nomeVendedor = document.getElementById('nomeVendedor').value;
    var totalVendas = document.getElementById('totalVendas').value;
    
    var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
    console.log('Nome Vendedor: ' + nomeVendedor);
    console.log('Total de Vendas: ' + totalVendas);
    console.log('Salário Bruto: ' + salarioBruto);
}
