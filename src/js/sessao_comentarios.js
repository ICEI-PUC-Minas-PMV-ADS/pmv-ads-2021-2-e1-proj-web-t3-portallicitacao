let areaComentario = document.querySelector("#sessao-comentarios");
let semComentario = document.querySelector("#sem-comentarios");
let cxModalMsg = document.querySelector('#cx-msg');
let lblNomeUsuario = document.querySelector('#lblUsuario');
let myObjComentario;

var nomeUsuario; // Recebe do localStorage o nome do usuário que fez o comentário
var txtComentario;
var abreAreaComentario = '<div class="comentarios mt-3 ml-3 mb-5">';
var imgComentario;
var nomeComentario;
var dataComentario;
var lnkImgFavoritar;
var lnkImgCurtir;
var fechaAreaComentario = '</div><hr class="featurette-divider"></hr>';
var contaComentarios = 0;

for (let i = 0; i < localStorage.length; i++){
    let comentarios = localStorage.key(i);
    //alert(comentarios.substring(3, 25));
    if (comentarios.substring(3, 25) == 'tcu-leiloes-aeroportos'){
        let conteudo = JSON.parse(localStorage.getItem(comentarios));
        const obj = conteudo;
        imgComentario = '<img class="img-fluid rounded-circle mr-2" src="' + obj.imagemUsuario + '" alt="">';
        nomeComentario = '<h5>' + obj.usuario + '</h5>';
        dataComentario = '<span>Data: ' + obj.dtComentario + '</span>';
        txtComentario = '<p>' +  obj.textoComentario + '</p>';
        for (c = 0; c < localStorage.length; c++){
            let comentarioCurtidas = localStorage.key(c);
            if (comentarioCurtidas.substring(3, 13) == ('comentario')){ // + i)){
                let curtida = JSON.parse(localStorage.getItem(comentarioCurtidas));
                const obj2 = curtida;
                lnkImgCurtir = '<img src="' + obj2.imgLike + '" alt="Comentário curtido" class="img-fluid img-interacao-rede-social"></span>';
                lnkImgFavoritar = '<span><img src="' + obj2.imgFavorito + '" alt="Comentário favorito" class="img-fluid img-interacao-rede-social">';
                c = localStorage.length + 1;
            }
        }
        contaComentarios++;
        if (contaComentarios == 1){
            //console.log(areaComentario.innerHTML);
            areaComentario.innerHTML = areaComentario.innerHTML + abreAreaComentario + imgComentario + nomeComentario + dataComentario +
                            '<p>'+ txtComentario + '</p>' + lnkImgFavoritar + lnkImgCurtir;
        }else{
            //console.log(areaComentario.innerHTML);
            areaComentario.innerHTML = areaComentario.innerHTML + abreAreaComentario + imgComentario + nomeComentario + dataComentario +
                            '<p>'+ txtComentario + '</p>' + lnkImgFavoritar + lnkImgCurtir + fechaAreaComentario;
        }
    }
}

function frmComentario(){
    nomeUsuario = localStorage.getItem('usuarioLogado');

    if (nomeUsuario != null){
        // Se existe usuário logado, carrega a o formulário (id=janelaModal) para preencher o comentário
        document.getElementById('inpUsuario').value = nomeUsuario //myItem.usuarioLogado;
        var modalJ = document.getElementById("janelaModal");
        modalJ.style.display = "block";
        // Torna invisível o botão de adicionar comentario
        //document.getElementById('sem-comentarios').style.display = "none";
    }else{
        // Se existe usuário logado, carrega a o formulário (id=janelaModal) para preencher o comentário
        document.getElementById('inpUsuario').value = 'Anonymous@Anonymous';
        nomeUsuario = 'Anonymous@Anonymous'
        var modalJ = document.getElementById("janelaModal");
        modalJ.style.display = "block";
        // Se não há usuário logado, abre uma caixa de mensagem para o visitante comunicando a necessidade de estar logado.
        // Nesta mesma caixa de mensagem, pergunta se o usuário deseja fazer o login.
        // document.getElementById('tituloJanelaModal').innerHTML = "Usuário não encontrado";
        // cxModalMsg.innerHTML = "Para fazer um comentário você deve fazer o login primeiro.<br>Você deseja fazer o login agora?";
        // $('#myModal').modal('show');
    }
}

function criarComentario(){
    var data  = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;

    var hora = String(data.getHours() + 1).padStart(2, '0');    // 0-23
    var min  = String(data.getMinutes() + 1).padStart(2, '0');  // 0-59
    var horaAtual = hora + ':' + min;

    // Prepara as variáveis com as tags e conteúdos para inserir o comentário na página.
    imgComentario = '<img class="img-fluid rounded-circle mr-2" src="imagens/usuario.jpg" alt="">';
    nomeComentario = '<h5>' + nomeUsuario + '</h5>';
    dataComentario = '<span>Data: ' + dataAtual + ' - ' + horaAtual + '</span>';
    txtComentario = '<p>' + document.getElementById('txt-comentario').value + '</p>';
    lnkImgFavoritar = '<span class="img-comentarios">' +
                   '<img src="imagens/heart-regular.svg" alt="Comentário favorito" class="img-fluid img-interacao-rede-social">';
    lnkImgCurtir = '<img src="imagens/thumbs-up-solid.svg" alt="Comentário curtido" class="img-fluid img-interacao-rede-social"></span>';

    //Concatena as variáveis com as tags para a montagem do comentário na tela.
    areaComentario.innerHTML = areaComentario.innerHTML + abreAreaComentario + imgComentario + nomeComentario + dataComentario + txtComentario + lnkImgFavoritar + lnkImgCurtir + fechaAreaComentario;
    // Gera a chave de identificação para salvar o comentário no storage
    geraChaveComentario();
    // Salva o camentário no localStorage do navegador
    myObjComentario = { usuario: nomeUsuario, dtComentario: dataComentario, textoComentario: document.getElementById('txt-comentario').value, imagemUsuario: 'imagens/img-usuario-padrao.jpg' };
    localStorage.setItem(contaComentarios, JSON.stringify(myObjComentario));

    var modalJ = document.getElementById("janelaModal");
    modalJ.style.display = "none";
}

function geraChaveComentario(){
    var idComentario;
    contaComentarios = 0
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.substring(3, 25) == 'tcu-leiloes-aeroportos'){
            idComentario = key.substring(0, 2);
        }
    }
    idComentario++;
    if (idComentario < 10){
        //alert("Novo comentário: " + ("0" + idComentario).slice(-2));
        contaComentarios = ("0" + idComentario).slice(-2) + '-tcu-leiloes-aeroportos';
    }else{
        //alert("Novo comentário: " + (contaComentarios).slice(-2));
        contaComentarios = (contaComentarios).slice(-2) + '-tcu-leiloes-aeroportos';
    }
}

function fechar() {

    var modalJ = document.getElementById("janelaModal");
    modalJ.style.display = "none";

    //alert('Chamou a função');
    //var modalJ = document.getElementById("janelaModal");
    //var modalB = document.getElementById("btFchar");
    //modalJ.style.display="none";
    
//   if (localStorage.length > 0) {
//         alert('Há itens: ');
//         for (let i = 0; i < localStorage.length; i++){
//             let key = localStorage.key(i);
//             let value = localStorage.getItem(key);
//             //console.log('listaUser', value);
//             alert(value)
//           }
//     } else {
//         alert('Não há itens');
//     }
    //let myItem = JSON.parse(localStorage.getItem(key));

    //alert(myItem);

    document.getElementById('sem-comentarios').style.display = "block";
}

function fechaModal(){
    let caixaMsg = document.querySelector('#myModal');
    caixaMsg.display = 'none';
}