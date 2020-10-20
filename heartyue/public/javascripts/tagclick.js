window.onload = function(){
    var $tag = $('.hot-into a')
    // console.log(11,$tag)
    $tag.on('click',function(){
        var booktag = $(this)[0].dataset.tag//当前查询条件
        if(booktag == undefined){
            // 不管
        }else{
            location.href = `boy-hot-list.html?booktag=${booktag}`;
        }
    })
}