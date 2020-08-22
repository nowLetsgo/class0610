const mimeTypes = {
    txt:"text/plain",
    html:"text/html",
    css:"text/css",
    js:"application/javascript",
    json:"application/json",
    png:"image/png",
    jpg:"image/jpg",
    gif:"image/gif",
    jpeg:"image/jpeg",
    webp:"image/webp",
    mp3:"audio/mp3",
    mp4:"video/mp4",
}

function matchMimeType(url){
    //url是请求的地址，最后一个.的后边就是后缀名
    const urlArr = url.split(".");
    //获取后缀名
    const extName = urlArr[urlArr.length - 1];
    //根据对象的匹配 获取响应的type地址
    return mimeTypes[extName] || "text/plain";
}

module.exports = matchMimeType;