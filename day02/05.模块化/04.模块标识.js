/* 
    模块标识：（require函数中的引入参数写法）
    1.自定义模块    
        可以不书写后缀名：默认按照 js   json   node 顺序给添加后缀
        一定要加上./ 或者 ../之类的路径  否则可能解析错误

    2.nodejs自有模块
        直接写模块名称
    3.第三方模块
        首先先通过npm下载相应的模块
        直接require相应的包名就可以了

*/

//第三方模块引入
const add = require("./01.add");


//内建模块（node自有模块）
// os 查看cpu占有率
const os = require("os");
const mem = os.freemem() / os.totalmem() * 100;
console.log(`目前cpu还剩余${mem.toFixed(2)}%`)


// 第三方模块 常见 jquery  bootstrap
const $ = require("jquery");
console.log($);