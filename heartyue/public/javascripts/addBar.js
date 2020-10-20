function addBar() {
    var bookId = location.search.split('?')[1]
    console.log(bookId)
    var $add = $('.add')
    $.ajax({
        url: 'addBar',
        type: 'get',
        data: `${bookId}&username=${localStorage.userinfo}`,
        success(res) {
            if (res) {
              console.log(res) //可以用做添加书包提示
                $add[0].innerText = '已进书包';
            }

        }
    })
}