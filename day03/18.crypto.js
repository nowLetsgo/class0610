/* 
    crypto 
        消息摘要加密算法
        MD5(128) sha1(160) sha256(256) sha512(512)
        - 生成的密文长度固定
        - 明文加密后得到的是固定的密文
        - 不可逆
*/

//创建明文
const crypto = require("crypto");
const str = "lipeihua0922";

//一般来说的这样直接把明文转换成密文容易被破解，所以我们一般会加点料
const myStr = str + "sha"

//createHmac方法 第一个参数是加密方式，第二个参数是明文
//createHmac方法返回的对象 调用digest('hex') 则返回密文的哈希值
const secret1 = crypto.createHmac("MD5", myStr).digest('hex');
const secret2 = crypto.createHmac("MD5", secret1).update('I love huahua').digest('hex');
const result = crypto.createHmac("MD5", secret2).update('haha').digest('hex');
console.log(result);