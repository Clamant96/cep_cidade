var cepRecebido;

var bairro = document.querySelector('#bairro')
var cep = document.querySelector('#cep')
var localidade = document.querySelector('#localidade')
var logradouro = document.querySelector('#logradouro')
var uf = document.querySelector('#uf')

//CAPITURANDO VALOR INSERIDO NO INPUT E ARMAZENANDO EM UMA VARIAVEL
document.querySelector("#numero").addEventListener("focusout", recebedorDados);

function recebedorDados(){
    //NAO PODE SER parseInt, POIS DESSA FORMA O VALOR SERA CONVERTIDO CASO COMESSE COM '0' 
    var valorRecebido = document.getElementById('numero').value;
    var verificarCep = valorRecebido.replace("-", "");
    cepRecebido = verificarCep
    
    console.log("Quantidade: "+valorRecebido);
    console.log("Dias: "+cepRecebido);

    acessoBancoDados();
}

//LOCALIZAR VALOR DE REQUISICAO DENTRO DO .JSON
function acessoBancoDados(){
    console.log("acessando FETCH, o valor do CEP foi: "+ cepRecebido)

    try {
        fetch(`http://viacep.com.br/ws/${cepRecebido}/json/`)
        .then(function (response) {
            return response.json()

        })
        .then(function (response){
            bairro.innerHTML = response.bairro
            cep.innerHTML = response.cep
            localidade.innerHTML = response.localidade
            logradouro.innerHTML = response.logradouro
            uf.innerHTML = response.uf
            
            return response
            
       })
            
    } catch (error) {
        console.log("Nao foi localizada a requisicao no servidor, tente novamente"+ error);
        
    }
        
}