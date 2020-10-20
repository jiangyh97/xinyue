console.log(1)
function ajax(obj){
    var xhr=new XMLHttpRequest()
    xhr.onreadystatechange=function(){
        if(xhr.status==200 && xhr.readyState==4){
            var data=xhr.responseText
            if(obj.dataType=='json'){
                data=JSON.parse(data)
            }
            obj.success(data)
        }
    }
    // post的url 只写url 不写参数
    if(obj.type=='get'){
        xhr.open(obj.type,obj.url+'?'+obj.data)//checkUserPost?username=val
        xhr.send(null)
    }else if(obj.type=='post'){
        xhr.open(obj.type,obj.url)
        // post请求需要设置header头 
        // Content-type表单请求 "application/x-www-form-urlencoded"
        // Content-type
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.send(obj.data)
    }
}