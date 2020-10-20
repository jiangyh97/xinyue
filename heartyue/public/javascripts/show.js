
function $(ele) {
    return document.querySelector(ele)
}

var booktype = $('.booktype').innerHTML

var first = $('.first').innerHTML
var third = $('.third').innerHTML

var diyi = $('#diyi').innerHTML
var dier = $('#dier').innerHTML
var dishan = $('#dishan').innerHTML
var dishi = $('#dishi').innerHTML


console.log(first)
// window.onload = function () {
    ajax({
        url: 'getShuji',
        type: 'get',
        data: `booktype=${booktype}`,
        dataType: 'json',
        success: function (res) {
            var len = res.length
            console.log(res)
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
                    if (arrTag[i] == first) {
                        console.log(arrTag[i])
                        $('.toutiao').innerHTML +=str;
                        continue;
                    } else if (arrTag[i] == diyi) {
                        $('#diyis').innerHTML = str + $('#diyis').innerHTML;
                        continue;
                    } else if (arrTag[i] == dier) {
                        $('#diers').innerHTML = str+ $('#diers').innerHTML;
                        continue;
                    } else if (arrTag[i] == dishan) {
                        $('#dishans').innerHTML = str + $('#dishans').innerHTML;
                        continue;
                    } else if (arrTag[i] == dishi) {
                        $('#dishis').innerHTML = str + $('#dishis').innerHTML;
                        continue;
                    } else if (arrTag[i] == third) {
                        $('.haoshu').innerHTML += str;
                        continue;
                    }
                }
            }
        }
    })
// }





