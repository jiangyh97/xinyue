function $(ele) {
    return document.querySelector(ele)
}
var booktype1 = $('.booktype1').innerHTML
var booktype2 = $('.booktype2').innerHTML
// 重磅
var first = $('.first').innerHTML
var third = $('.third').innerHTML
// 男
var diyi = $('#diyi').innerHTML;//查找玄幻男
var dier = $('#dier').innerHTML
var dishan = $('#dishan').innerHTML
var dishi = $('#dishi').innerHTML

// 女
var diyi2 = $('#diyi2').innerHTML;//查找玄幻男
var dier2 = $('#dier2').innerHTML
var dishan2 = $('#dishan2').innerHTML
var dishi2 = $('#dishi2').innerHTML

ajax({
    url: 'getindex',
    type: 'get',
    dataType: 'json',
    success: function (res) {
        var len = res.length
        // 重磅
        for (let i = 0; i < len; i++) {
            let data = res[i];

            let tagList = data.tagList
            let arrTag = tagList.split(' ');
            if (data.booktype == first) {
                console.log(data)
                $('.toutiao').innerHTML += `<a href="#" class="toutiao-item01" data-bookid="${data.bookId}">
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
                continue;
            }
        }
        // 男
        for (let i = 0; i < len; i++) {
            data = res[i]
            var tagList = data.tagList
            // 拆分tagList成为数组，进行循环匹配
            var arrTag = tagList.split(' ')
            var booktype = data.booktype
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
                if (arrTag[i] == diyi) {
                    $('#diyis').innerHTML = str + $('#diyis').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dier) {
                    $('#diers').innerHTML = str + $('#diers').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dishan) {
                    $('#dishans').innerHTML = str + $('#dishans').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dishi && booktype == booktype1) {
                    $('#dishis').innerHTML = str + $('#dishis').innerHTML;
                    continue;
                }
            }
        }
        // 女
        for (let i = 0; i < len; i++) {
            data = res[i]
            var tagList = data.tagList
            // 拆分tagList成为数组，进行循环匹配
            var arrTag = tagList.split(' ')
            var booktype = data.booktype
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
                if (arrTag[i] == diyi2) {
                    $('#diyis2').innerHTML = str + $('#diyis2').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dier2) {
                    $('#diers2').innerHTML = str + $('#diers2').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dishan2) {
                    $('#dishans2').innerHTML = str + $('#dishans2').innerHTML;
                    continue;
                }
                else if (arrTag[i] == dishi2 && booktype == booktype2) {
                    console.log('11111')
                    $('#dishis2').innerHTML = str + $('#dishis2').innerHTML;
                    continue;
                }
            }
        }
        // 类型阅读
        for (let i = 0; i < len; i++) {
            data = res[i]
            var tagList = data.tagList
            // 拆分tagList成为数组，进行循环匹配
            var arrTag = tagList.split(' ')
            var booktype = data.booktype
           for(let i = 0; i < arrTag.length; i++){
            if (arrTag[i] == third) {
                $('.haoshu').innerHTML +=
                    `<a href="#" class="toutiao-item01" data-bookid="${data.bookId}">
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
                continue;
           }
            }
        }
    }
})






