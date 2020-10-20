window.onload = function () {
    var $item = $('.wapper')
    $item.on('click', 'a', function () {
        var bookId = $(this)[0].dataset.bookid//当前点击书的id
        if (bookId == undefined) {
            // console.log("此处id为空,不管")
            // console.log(bookId)
        } else {
            location.href = `Introduction.html?bookId=${bookId}`
        }
    })

}