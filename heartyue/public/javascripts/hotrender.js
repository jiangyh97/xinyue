var itemb = document.querySelector('.wapper')
var booktags = location.search.split('?')[1];


var a = booktags.split('=')
console.log(a[1]);


$.ajax({
    url: 'getindex',
    type: 'get',
    dataType: 'json',
    success: function (res) {
        var len = res.length
        for (let i = 0; i < len; i++) {
            data = res[i]
            var tagList = data.tagList
            var arrTag = tagList.split(' ')
            
            var str = `<a href="#" class="toutiao-item01" data-bookid="${data.bookId}">
                    <div>
                        <div>
                            <img src="${data.cover}" alt="">
                            <img src="./img/jingpin.png" alt="">
                        </div>
                        <div>
                            <p>${data.title}</p>
                            <span>${arrTag[0]}</span>
                            <i></i>
                            <span>${arrTag[1]}</span>
                            <i></i>
                            <span>${arrTag[2]}</span>
                            <p>${data.description}</p>
                        </div>
                    </div>
                </a>`;
            for (let i = 0; i < arrTag.length; i++) {
                if (arrTag[i] == a[1]) {
                    itemb.innerHTML += str;
                    continue;
                }
            }
        }
    }
})