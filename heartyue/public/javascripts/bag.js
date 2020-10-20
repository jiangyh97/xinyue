var content = document.querySelector('.content');
//content 部分没有子节点时的设置
function contentIsNull() {
    content.innerHTML += `
        <div class="content-tip">
            <p>来装满书包吧~</p>
            <img src="./images/bag_2gText.png" alt="">
        </div>
    `;
}

//读书情况的设置
function readInfo(len) {
    content.innerHTML += `
        <div class="read-info">
            <p>您正在阅读 <span>${len}</span> 本书</p>
            <div class="edit-btn">
                <button class="edit">编辑</button>
               
              
            </div>
        </div>
    `;


}

//判断 content 内是否有子节点
function judgeContent() {
    if (content.childElementCount == 0) {
        contentIsNull();
    }
}
judgeContent()
//添加 书籍
function addReadBook(data) {
    var tagList = data.tagList
    var arrTag = tagList.split(' ')
    var str = `
        <a href="#" class="read-book" data-bookid="${data.bookId}">
            <div class="read-book-img"><img src="${data.cover}" alt=""></div>
            <div class="read-book-info">
                <p class="read-book-tit">${data.title}</p>
                <p class="read-book-key">
                    <span>${arrTag[0]}</span>&nbsp; |&nbsp;
                    <span>${arrTag[1]}</span>&nbsp; |&nbsp;
                    <span>${arrTag[2]}</span>
                </p>
                <p class="read-situation">还没有阅读记录哦～</p>
            </div>
            <div class="choose btn-hid">
            <button class="del btn-hid" data-bookid="${data.bookId}">删除</button>
            </div>
        </a>
    `;
    content.innerHTML += str;
    setReadBookLine();


    var $edit = $('.edit')
    $edit.on('click', function () {
        $('.btn-hid').css('display', 'block')
    })
    $('.btn-hid').on('click',function(e){
        e.stopPropagation()
        var bookId = $(this)[0].dataset.bookid//当前点击书的id
        var username=localStorage.userinfo
        $.ajax({
           url:'delBar',
           type:'get',
           data:`username=${username}&bookId=${bookId}`,
           success(res){
           }

        })
    
    })
 

}
// <input type="checkbox" class="checkbox" id="choose-box-2" style="display: none;">
// <label for="choose-box-2" class="choose-box">
//     <span class="iconfont iconcheck"></span>
// </label>

//设置书籍间隔线
function setReadBookLine() {
    var readBook = document.querySelectorAll('.read-book');
    if (readBook.length > 1) {
        for (var i = 0; i < readBook.length - 1; i++) {
            readBook[i].classList.add('read-book-line')
        }
    }
}

