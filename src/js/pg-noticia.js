let lnkA = document.querySelector('#lnk-noticia-collapse')
// let lnkVerCompleta = document.querySelector('#lnk-ver-completa')

lnkA.addEventListener('click', () =>{
  if(lnkA.innerHTML == 'Ver mais...'){
    lnkA.innerHTML = 'Ver menos...'
    document.getElementById('lnk-ver-completa').style.display = 'block';
  }else{
    lnkA.innerHTML = 'Ver mais...'
    document.getElementById('lnk-ver-completa').style.display = 'none';
  }
})
