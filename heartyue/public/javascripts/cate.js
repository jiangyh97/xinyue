(function showallClick(){
    var showall = document.querySelector('.sort-showall');
    console.log(showall.classList)
    var keywords = document.querySelectorAll('.keyword-sort');
    showall.onclick = function(){
        if(keywords[0].classList.contains('keyword-change')){
            keywords[0].classList.remove('keyword-change');
            showall.style.transform = 'rotate(180deg)';
        }else{
            keywords[0].classList.add('keyword-change');
            showall.style.transform = 'rotate(0deg)';
        }
        
    }
})();