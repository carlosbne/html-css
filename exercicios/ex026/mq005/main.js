const menu = document.querySelector('.menu');

function abrirMenu(){

    if(menu.style.display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none'
    }
}