let cancel = document.querySelector('.cancel');
let inp = document.querySelector('input');
let imgClick=document.querySelector('.header img');
inp.onkeydown = function (e) {
    if (e.code == 'Backspace' && inp.value.length == 1) {
        cancel.innerText = '取消'
        cancel.classList.remove('search')
        imgClick.classList.remove('show')
        return;
    }
    if (inp.value.length >= 0) {
        cancel.innerText = '确认';
        imgClick.classList.add('show')
        cancel.classList.add('search')
    }
}
imgClick.addEventListener('click',function(){
    inp.value='';
    cancel.innerText = '取消';
    cancel.classList.remove('search')
    imgClick.classList.remove('show')
})