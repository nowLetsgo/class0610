/* 
    响应状态码：
        1XX： 正在处理请求中
            100：一切正常，正在请求
            101：正在切换协议
        2XX：请求成功
            200：请求成功
            204：PUT和DELETE一般返回204，表示页面主体不发生修改
        3XX: 重定向
            301：永久重定向
            302：临时重定向
            304：读取缓存（协商缓存）
        4XX：客户端错误
            400: 代表响应报文有问题，需要修改
            403：代表服务器拒绝访问
            404：服务器端无法找到请求的资源，或者服务端不想给给响应
        5XX：服务端错误
            500：代表服务器端执行客户端请求时出错
            503：代表服务器超负荷或者停机维护中，无法处理响应
*/