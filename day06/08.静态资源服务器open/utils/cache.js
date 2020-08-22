//生成文件的唯一标识需要eTag包
const etag = require("etag");

//检查是否读取缓存  参数是当前读取的文件 和 req请求报文
function checkCache(stats, req) {
    //获取请求的 if-none-match  和 if-modified-since
    const ifNoneMath = req.headers['if-none-match'];
    const ifModifiedSince = req.headers['if-modified-since'];

    //获取服务器的当前文件的etag 和 last-modified
    const eTag = etag(stats);
    const lastModified = new Date(stats.mtime).toGMTString();

    //创建一个事件的3种方式
    /*
        new Date("2020-8-20 10:10:10")
        new Date(2012312423413)
        new Date(2020,9,10,8,10,14,300)
    */

    //进行判断，如果缓存，则当前的函数返回true 否则返回false
    if (ifNoneMath != eTag) {
        //如果不等  则说明已经不是原来的文件了
        return false;
    }

    if (ifModifiedSince != lastModified) {
        //说明服务器的文件被修改过，也不能读取缓存了
        return false;
    }

    return true;

}


//设置缓存函数
function setCache(stats,res) {
    //设置强制缓存（优先级最高） 两个版本 分别代表http1.0 和 http1.1的版本
    res.setHeader("Cache-Control", "max-age=3600,public");
    res.setHeader("Expires", new Date(Date.now() + 3600000).toGMTString());
    //设置1小时之后的时间
    // new Date().setHours(new Date().getHours() + 1)
    // new Date(Date.now() + 3600000)

    //设置协商缓存
    res.setHeader("eTag",etag(stats));
    res.setHeader("last-modified",new Date(stats.mtime).toGMTString());
}



//暴露的缓存函数
function cache(stats,req,res) {
    const isCache = checkCache(stats,req);

    //isCache为false，则代表不缓存，所以直接设置缓存 推出当前函数
    if(!isCache){
        setCache(stats,res);
        return;
    }

    //当读取缓存的话，则返回响应状态码 304，并不响应值
    res.statusCode = 304;
    res.end();
    return true;
}

module.exports = cache;