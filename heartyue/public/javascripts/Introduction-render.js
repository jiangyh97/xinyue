var $header = $('header')
var bookId = location.search.split('?')[1];
$.ajax({
    url: 'getBookInfo',
    type: 'get',
    dataType: 'json',
    data: `${bookId}`,
    success(res) {
        console.log(44444, res)
        var str = ''
        str = `
        <div class="header">
        <h2>${res.title}</h2>
        <div>
        <div class="left">
            <img src="${res.cover}" alt="">
        </div>
         <div class="right">
            <p>作者：${res.author}</p>
            <p>来源：阅文集团</p>
            <p><span>${res.tagList.split(' ')[0]}</span>
                <span>${res.tagList.split(' ')[1]}</span>
                <span>${res.tagList.split(' ')[2]}</span></p>
            <p>${res.status}&nbsp;|&nbsp;约210万字&nbsp;|&nbsp;0.05元/千字</p>
        </div>
    </div>
        <span onclick="addBar()" class="add">加入书包</span>
        <span onclick="javascript:location.href='readbook.html'">开始阅读</span>
        <span><a href="./javascripts/division.txt" download='division.txt'>离线下载</a></span>
    </div>
    <div class="jianjie">
        <p>简介</p>
        <p>${res.description}</p>
    </div>
        `
        $header[0].innerHTML=str
    }


})