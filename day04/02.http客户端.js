const http = require("http");

const url = "http://localhost:3838";
//书写请求
const request = http.request(url, res => {
    //res就是得到相应的内容
    // console.log(res);

    //res.statusCode是相应状态码
    console.log(res.statusCode)

    let result = "";
    //响应的data事件 用来消费读取的内容，每次传输的是64kb  需要我们在事件中把响应的内容拼接
    res.on("data", chunk => {
        //得到所有的响应内容
        result += chunk;
    })
    console.log(result)

})

//发送请求
request.end();