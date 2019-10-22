var nomes = [];

function adicionarNome(){
   let nome = document.getElementById('nome').value;
   nomes.push(nome);
   listarNomes();
   document.getElementById('nome').value = "";
}

function listarNomes(){
    var ol = document.querySelector('#listaNomes');
    nomes.forEach(function (item, index){
        ol.innerHTML += '<li>'+ item +'</li>';
    });
}