const zlib = require("zlib");

//rs：数据  req：请求
function compress(rs,req,res){
    const acceptEncoding = req.headers['accept-encoding'];
    console.log(acceptEncoding)//`gzip, deflate, br`

    //includes 检测某个字符串中 有没有出现某个字符串，返回的是布尔值
    const isgZip = acceptEncoding.includes("gzip");
    if(isgZip){
        rs = rs.pipe(zlib.createGzip());
        res.setHeader("Content-Encoding","gzip");
        //功能最终返回压缩后的值
        return rs;
    }

    const isDeflate = acceptEncoding.includes("deflate");
    if(isDeflate){
        rs = rs.pipe(zlib.createDeflate());
        res.setHeader("Content-Encoding","deflate");
        return rs;
    }

    const isBr = acceptEncoding.includes("br");
    if(isBr){
        rs = rs.pipe(zlib.createBrotliCompress());
        res.setHeader("Content-Encoding","br");
        return rs;
    }
    
    //如果3个都不支持 则返回原来的rs
    return rs;

}

module.exports = compress;