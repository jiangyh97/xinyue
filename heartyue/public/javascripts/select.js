var liList=document.querySelectorAll('.tab-header li');
var boxList=document.querySelectorAll('.tab-cnt>div');
let countBoy=0;
let countgirl=4;
for(var i=0;i<liList.length;i++){
    liList[i].idx=i
    liList[i].addEventListener('click',function(){
        let index=this.idx;
        if(boxList[index].classList.contains('show')){
            return
        }else if(index<4){
            liList[countBoy].classList.remove('link');
            liList[index].classList.add('link');
            boxList[countBoy].classList.remove('show');
            boxList[index].classList.add('show')
            countBoy=index;
        }else if(index>=4){
            liList[countgirl].classList.remove('link');
            liList[index].classList.add('link');
            boxList[countgirl].classList.remove('show');
            boxList[index].classList.add('show')
            countgirl=index;
        }
    })
}