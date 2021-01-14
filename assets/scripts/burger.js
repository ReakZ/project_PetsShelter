

 function burger(){

    let burgetBtn=document.querySelector('.burger-menu')
    let header_mobile=document.querySelector('.header_mobile')
    let burgerIcon=document.querySelector('.burgerIcon')
    burgetBtn.addEventListener('click',(e)=>{
        burgerIcon.classList.toggle("rotate")
        header_mobile.classList.toggle("header__mobile_show")
    })

    //

}

burger()