const hamburgue = document.querySelector('.header__toggle')


/*______________Header_______________*/



function mostra (){
    const menu = document.querySelector('.header__menu')
    menu.classList.toggle('open--menu')
    document.body.classList.toggle('open')
}

hamburgue.addEventListener('click', mostra)

