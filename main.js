







const share_Buttons = document.querySelectorAll('.share-button')
const share_Section = document.querySelector('.share')
const share_section_continar = document.querySelector('.auther')
const share_Section_mb = document.querySelector('.share-mb')

window.onresize = function(){
    if(document.body.clientWidth < 800){
        share_Section.classList.add('mb-size')
    }else{
        share_Section.classList.remove('mb-size')
        share_section_continar.classList.remove('mb-continar')
        share_Section_mb.classList.remove('apper')
    }
}

share_Buttons.forEach(function(el){
    el.onclick = function () {
        share_Section.classList.toggle('apper')
        el.classList.toggle('darker')
        if(document.body.clientWidth < 800){
            share_section_continar.classList.toggle('mb-continar')
            share_Section_mb.classList.toggle('apper')
            this.classList.remove('darker')
            share_Section.classList.remove('apper')
        }
    }
})