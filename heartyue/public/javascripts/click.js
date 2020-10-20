// window.onload = function () {
    var $item = $('.wapper a')
    console.log(4, $item)
    $item.on('click', function () {
        var bookId = $(this)[0].dataset.bookid//当前点击书的id
        console.log(bookId)
        if (bookId == undefined) {
            // console.log("此处id为空,不管")
            // console.log(bookId)
        } else {
            location.href = `Introduction.html?bookId=${bookId}`
        }
    })

// }