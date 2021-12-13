let areaComentario = document.querySelector("#sessao-comentarios");
let semComentario = document.querySelector("#sem-comentarios");
let cxModalMsg = document.querySelector('#cx-msg');
let lblNomeUsuario = document.querySelector('#lblUsuario');

var txtComentario;
var abreAreaComentario;
var imgComentario;
var nomeComentario;
var dataComentario;
var lnkImgFavoritar;
var lnkImgCurtir;
var fechaAreaComentario;

function frmComentario(){
    
    let myItem = JSON.parse(localStorage.getItem('usuarioLogado'));
    const obj = myItem
    
    // Verifica se há usuário logado. Só pode haver um.
    if (myItem.nomeUsario != null){
        // Se existe usuário logado, carrega a o formulário (id=janelaModal) para preencher o comentário
        document.getElementById('inpUsuario').value = myItem.nomeUsario;
        var modalJ = document.getElementById("janelaModal");
        modalJ.style.display = "block";
        // Torna invisível o botão de adicionar comentario
        document.getElementById('sem-comentarios').style.display = "none";
    }else{
        // Se não há usuário logado, abre uma caixa de mensagem para o visitante comunicando a necessidade de estar logado.
        // Nesta mesma caixa de mensagem, pergunta se o usuário deseja fazer o login.
        document.getElementById('tituloJanelaModal').innerHTML = "Usuário não encontrado";
        cxModalMsg.innerHTML = "Para fazer um comentário você deve fazer o login primeiro.<br>Você deseja fazer o login agora?";
        $('#myModal').modal('show');
    }
}

function criarComentario(){
    
    var data  = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;

    var hora = data.getHours();    // 0-23
    var min  = data.getMinutes();  // 0-59
    var horaAtual = hora + ':' + min;

    abreAreaComentario = '<div class="comentarios mt-4 ml-3">';
    imgComentario = '<img class="img-fluid rounded-circle mr-2" src="http://source.unsplash.com/random" alt="">';
    nomeComentario = '<h5>' + document.getElementById('inpUsuario').value + '</h5>';
    dataComentario = '<span>Data: ' + dataAtual + ' - ' + horaAtual + '</span>';
    txtComentario = '<p>' + document.getElementById('txt-comentario').value + '</p>';
    lnkImgFavoritar = '<span class="img-comentarios">' +
                    '<img src="imagens/heart-regular.svg" alt="Comentário favorito" class="img-fluid img-interacao-rede-social">';
    lnkImgCurtir = '<img src="imagens/thumbs-up-solid.svg" alt="Comentário curtido" class="img-fluid img-interacao-rede-social"></span>';
    fechaAreaComentario = '</div><hr class="featurette-divider"></hr>';

    areaComentario.innerHTML = abreAreaComentario + imgComentario + nomeComentario + dataComentario +
                            '<p>'+ txtComentario + '</p>' + lnkImgFavoritar + lnkImgCurtir + fechaAreaComentario;

    //let myObj = { id: idComentario, name: lblNomeUsuario.innerHTML, comentario: txtComentario.value };
    //localStorage.setItem('comentario01', JSON.stringify(myObj))

    var modalJ = document.getElementById("janelaModal");
    modalJ.style.display = "none";
}

function publicar(){

    var idComentario;

    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        //alert(key.substr(0, 10)); 
        // if (key.substr(0, 10) == 'comentario'){
        //     alert('EXISTE ' + ("0" + i).slice(-2));
        // }else{
        //     alert('NÃO EXISTE ' + ("0" + i).slice(-2));
        // }
        idComentario = key.substring(10, 2);
      }

    idComentario++;
    
    if (idComentario < 10){
        alert("Novo comentário: " + ("0" + idComentario).slice(-2));
    }else{
        alert("Novo comentário: " + (idComentario).slice(-2));
    }
    
    //lblNomeUsuario = document.getElementById('lblUsuario');
    // var txtComentario = document.getElementById('txt-comentario');
    
    // var txtNomeUsuario = 'comentario01';

    // alert(txtNomeUsuario.substr(10,02))

    //let myObj = { id: idComentario, name: lblNomeUsuario.innerHTML, comentario: txtComentario.value };
    //localStorage.setItem('comentario01', JSON.stringify(myObj))
    // let myItem = JSON.parse(localStorage.getItem('listaUser'));
    // const obj = myItem
    // console.log(obj.comentario);
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