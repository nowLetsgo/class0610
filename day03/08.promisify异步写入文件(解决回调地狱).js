/* 
    异步写入文件
*/

//引入包
const fs = require("fs");
const path = require("path");
const {
    resolve
} = require("path");
const {
    promisify
} = require("util");

//处理路径
const filePath = path.resolve(__dirname, "./txt/01.txt");;

const openFile = promisify(fs.open);
const writeFile = promisify(fs.write);
const closeFile = promisify(fs.close);


(async function () {
    // 异常处理 try...catch
    try {
        const fd = await openFile(filePath, "w");
        await writeFile(fd, "锄禾日当午，汗滴禾下土");
        await closeFile(fd);
    } catch (err) {
        console.log(err);
        console.log("文件出现错误")
    }
})();