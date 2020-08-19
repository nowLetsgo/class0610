/* 
    //GET请求报文
    //1.请求报文首行
    GET http://localhost:3838/?username=lipeihua&password=123456 HTTP/1.1
    - GET：请求方式，get请求是把请求内容拼接在请求地址上的
    - http://localhost:3838/：请求地址
    - ?username=lipeihua&password=123456：请求参数 （查询字符串）
    - HTTP/1.1：http协议的版本（兼容性最好的）   最新的是http/2版本
    
    //2.请求报文头部
    - 请求的主机地址  域名+端口号
    Host: localhost:3838 
    - 连接方式：保持长连接（会在一定时间内 保持客户端和服务端的连接，当短时间内多次请求的话，可以节省时间）
    Connection: keep-alive
    - 允许使用https访问
    Upgrade-Insecure-Requests: 1
    - 用户代理（一般是浏览器的信息）
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36
    - 客户端可以接收的类型
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,\*\/\*;q=0.8,application/signed-exchange;v=b3;q=0.9
    Sec-Fetch-Site: none
    Sec-Fetch-Mode: navigate
    Sec-Fetch-User: ?1
    Sec-Fetch-Dest: document
    - 客户端可以接受的压缩格式  gzip  deflate br
    Accept-Encoding: gzip, deflate, br
    - 可以支持的语言
    Accept-Language: zh-CN,zh;q=0.9

    //3.请求报文空行
    - 一个回车或者空格

    //4.请求报文体
    - get请求的报文体 是直接跟在了请求地址上的

*/



/* 
    get请求的响应报文

    //1.响应报文首行
    HTTP/1.1 200 OK
    - HTTP/1.1 ：协议版本
    - 200OK ：响应状态码

    //2.响应报文头部
    - 响应数据的类型
    Content-Type: text/html;charset=utf-8
    - 响应的事件
    Date: Wed, 19 Aug 2020 03:13:21 GMT
    - 保持长连接
    Connection: keep-alive
    - 响应的内容的字节长度
    Content-Length: 27

    //3.响应报文空行

    //4.响应报文体
    <h1>今天天气真好</h1>



*/