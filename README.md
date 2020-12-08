# LOCALIZADOR DE ENDEREÇO
Sistema desenvolvido para receber um CEP e retornar o endereço completo do local informado.

![GitHub Logo](img/cep_cidade_index.png)

## COMO UTILIZAR
 - Para se realiza a pesquisa do endereco, foi utilizado um banco de dados disponibilizado no link a seguir (http://viacep.com.br/)

## COMO E REALIZADA A REQUISIÇÃO
 - Para se realizar a requiscao, se foi utilizado o metodo FETCH, disponivel pelo proprio JavaScript, segue codigo abaixo, exemplificando a coleta
    - [x] [
            try {
                fetch('http://viacep.com.br/ws/05345000/json/')
                .then(function (response) {
                    return response.json()

                })
                .then(function (response){
                    return response.bairro
                    
            })
                    
            } catch (error) {
                console.log("Nao foi localizada a requisicao no servidor, tente novamente"+ error);
                
            }

        ]

## SOBRE O PROJETO
 - Esse projeto foi desenvolvido com o intuito de aprender mais sobre a ferrameta fetch, e sobre como realizar a coleta de informacoes de um servidor de informações

        
