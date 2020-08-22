const fs = require("fs");
const path = require("path");
const http = require("http");
const zlib = require("zlib");

http.createServer((req,res)=>{
    const filePath = path.resolve(__dirname,"./compress.js");

    //压缩的时候需要的是流式的 所以可以创建一个可读流
    let rs = fs.createReadStream(filePath);

    //gzip压缩
    //使用zlib.createGzip() 创建一个gzip对象
    //把读取的rs 通过pipe 写入gzip对象  返回值是一个压缩后的内容
    // rs = rs.pipe(zlib.createGzip());
    //设置响应头  体现当前的压缩格式
    // res.setHeader("Content-Encoding","gzip");

    //deflate
    // rs = rs.pipe(zlib.createDeflate());
    //设置响应头  体现当前的压缩格式
    // res.setHeader("Content-Encoding","deflate");

    //br
    rs = rs.pipe(zlib.createBrotliCompress());
    //设置响应头  体现当前的压缩格式
    res.setHeader("Content-Encoding","br");



    res.setHeader("Content-Type","application/javascript;charset=utf-8")
    //可以直接把rs写入到res的响应
    rs.pipe(res);
}).listen(3001,"localhost",(err)=>{
    console.log("http://localhost:3001");
})