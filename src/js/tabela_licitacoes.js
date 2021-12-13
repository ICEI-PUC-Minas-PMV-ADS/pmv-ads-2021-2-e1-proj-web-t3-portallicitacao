// Variáveis globais
var botao_adicionar = document.querySelector("#adicionar_dados");
var campo_data = document.querySelector("input[name='ano']");
var campo_nome = document.querySelector("input[name='nome']");
var corpo_tabela = document.querySelector("tbody");
var hoje = new Date();
var ano_atual = hoje.getFullYear();

// function Entrevista(){//(nome, ano){
//     this.nome = nome;
//     this.ano_informado = ano;
//     this.calcula_idade = function(){
//         return ano_atual - this.ano_informado;
//     }
//     this.mostrar_dados = function(){
//         console.log("O nome é " + this.nome +
//                 " o ano é " + this.ano_informado +
//                 " e a idade é " + this.calcula_idade());
//     }
//     this.criar_linha_tabela = function(){
//         // Criar elementos
//         var linha = document.createElement("tr");
//         var campo_nome = document.createElement("td");
//         var campo_ano = document.createElement("td");
//         var campo_idade = document.createElement("td");
//         // Aplicar um estilo aos elementos
//         campo_nome.className = "bold";
//         // Criar nós
//         var texto_nome = document.createTextNode(this.nome);
//         var texto_ano = document.createTextNode(this.ano_informado);
//         var texto_idade = document.createTextNode(this.calcula_idade);
//         // Vincular os nós aos elementos
//         campo_nome.appendChild(texto_nome);
//         campo_ano.appendChild(texto_ano);
//         campo_idade.appendChild(texto_idade);
//         linha.appendChild(campo_nome);
//         linha.appendChild(campo_ano);
//         linha.appendChild(campo_idade);
//         // Vincular os elementos ao documento
//         corpo_tabela.appendChild(linha);
//     };
// }

 function criar_linha_tabela(){
    var imprimeData;
    imprimeData = ano_atual - campo_data.value;
    
    // Criar elementos
    var linha = document.createElement("tr");
    var campo_nome = document.createElement("td");
    var campo_ano = document.createElement("td");
    var campo_idade = document.createElement("td");
    // Aplicar um estilo aos elementos
    //campo_nome.className = "bold";
    // Criar nós
    var texto_nome = document.createTextNode(campo_nome.value);
    var texto_ano = document.createTextNode(campo_ano.value);
    var texto_idade = document.createTextNode(imprimeData);
    // Vincular os nós aos elementos
    campo_nome.appendChild(texto_nome);
    campo_ano.appendChild(texto_ano);
    campo_idade.appendChild(texto_idade);
    linha.appendChild(campo_nome);
    linha.appendChild(campo_ano);
    linha.appendChild(campo_idade);
    // Vincular os elementos ao documento
    corpo_tabela.appendChild(linha);
};

// Funções

//function adicionar_dados(){
//     // event.preventDefault();
//     var ano_informado = campo_data.value;
//     console.log(campo_data.value);
//     console.log(ano_informado);
//     if (ano_informado >= 1900 && ano_informado <= ano_atual){
//         nova_entrevista = new Entrevista(campo_nome.value, campo_data.value);
//         nova_entrevista.mostrar_dados();
//     }else{
//         document.querySelector(".alerta").innerText = "Data Inválida!!";
//     };
// };

function adicionar_dados(event){
    event.preventDefault();
    var ano_informado = campo_data.value;
    if (ano_informado >= 1900 && ano_informado <= ano_atual){
        // nova_entrevista = new Entrevista()//(campo_nome.value, campo_data.value);
        // nova_entrevista.mostrar_dados();
        criar_linha_tabela();
    }else{
        document.querySelector(".alerta").innerText = "Data Inválida!!";
    };
};

// Rotina Principal
botao_adicionar.addEventListener('click', adicionar_dados);
