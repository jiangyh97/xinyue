var title = document.querySelectorAll('.main-tit')
console.log(title)
function $(ele) {
    return document.querySelector(ele)
}
// title[i].innerHTML
console.log(title[0].innerHTML)
ajax({
    url: 'getindex',
    type: 'get',
    dataType: 'json',
    success: function (res) {
        var len = res.length;
        for (let i = 0; i < len; i++) {
            data = res[i]
            var tagList = data.tagList
            // 拆分tagList成为数组，进行循环匹配
            var arrTag = tagList.split(' ')
            // var booktype = data.booktype
            var str = `<a href="#" class="hot-book" data-bookid="${data.bookId}">
                <div class="hot-book-img">
                    <img src="${data.cover}" alt="">
                </div>
                <div class="hot-book-info">
                    <p class="hot-book-tit">${data.title}</p>
                    <p class="hot-book-key">
                    <span>${arrTag[0]}</span>&nbsp; |&nbsp;
                    <span>${arrTag[1]}</span>&nbsp; |&nbsp;
                    <span>${arrTag[2]}</span>
                    </p>
                    <p class="hot-book-desc">${data.description}</p>
                </div>
            </a>`;
            for (let i = 0; i < arrTag.length; i++) {
                if (arrTag[i] == title[0].innerHTML) {
                    $('.boys').innerHTML += str;
                }if (arrTag[i] == title[1].innerHTML) {
                    $('.fantasy').innerHTML += str;
                }if (arrTag[i] == title[2].innerHTML) {
                    $('.city').innerHTML += str;
                }if (arrTag[i] == title[3].innerHTML) {
                    $('.girls').innerHTML += str;
                }if (arrTag[i] == title[4].innerHTML) {
                    $('.ancient').innerHTML += str;
                }if (arrTag[i] == title[5].innerHTML) {
                    $('.modern').innerHTML += str;
                }
            }
        }
    }
})