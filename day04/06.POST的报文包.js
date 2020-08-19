/* 
    POST请求报文包
    //报文首行
    POST http://localhost:3838/ HTTP/1.1

    //报文头部
    Host: localhost:3838
    Connection: keep-alive
    - 请求的字节长度
    Content-Length: 33

    //强制缓存的时间限制
    Cache-Control: max-age=0
    Upgrade-Insecure-Requests: 1
    Origin: null
    //请求的格式 是form表单格式
    Content-Type: application/x-www-form-urlencoded
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,\*\/\*;q=0.8,application/signed-exchange;v=b3;q=0.9
    Sec-Fetch-Site: cross-site
    Sec-Fetch-Mode: navigate
    Sec-Fetch-User: ?1
    Sec-Fetch-Dest: document
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9

    //报文空行

    //报文体
    GET请求的报文体在首行中，但是POST是在报文体中
    username=lipeihua&password=123456

*/


/* 
    POST请求的响应报文(和GET一样)

    HTTP/1.1 200 OK
    Content-Type: text/html;charset=utf-8
    Date: Wed, 19 Aug 2020 03:41:39 GMT
    Connection: keep-alive
    Content-Length: 27

    <h1>今天天气真好</h1>

*/