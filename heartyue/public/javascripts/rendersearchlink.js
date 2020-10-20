let $header = $(".header")
    $header.on('click', '.search', function () {
        let $bookName = $(".bookname")
        let bookname = $bookName.val()
        $.ajax({
            url: 'search-link',
            type: 'get',
            dataType: 'json',
            data: `bookname=${bookname}`,
            success(res) {
                //渲染数据查到的
                var str = ''
                console.log(res)
                res.forEach(function (item) {
                    console.log(item)
                    str += `<a href="#" class="toutiao-item01" data-bookid="${item.bookId}">
                <div>
                <div>
                    <img src="${item.cover}" alt="">
                    <img src="./img/jingpin.png" alt="">
                </div>
                <div>
                    <p>${item.title}</p>
                    <span>${item.tagList.split(' ')[0]}</span>
                    <i></i>
                    <span>${item.tagList.split(' ')[1]}</span>
                    <i></i>
                    <span>${item.tagList.split(' ')[2]}</span>
                    <p>${item.description}</p>
                </div>
                </div>
            </a>`;
                    $('.wapper').html(str)
                });
            },
        })
    })