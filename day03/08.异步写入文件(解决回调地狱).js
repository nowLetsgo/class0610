/* 
    异步写入文件
*/

//引入包
const fs = require("fs");
const path = require("path");
const {
    resolve
} = require("path");

//处理路径
const filePath = path.resolve(__dirname, "./txt/01.txt");;


//打开文件函数（返回promise对象）
function openFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.open(filePath, "r", (err, fd) => {
            //err在前，因为nodejs是错误优先处理机制,如果有错误则返回错误对象，否则返回null
            if (err) {
                console.log("文件打开失败");
                reject("文件打开失败" + err);
                return;
            }
            //文件打开成功
            console.log(fd); //当前打开文件的句柄
            console.log("文件打开成功")
            resolve(fd);
        })
    })
}

//写入文件函数
function writeFile(fd, string) {
    return new Promise((resolve, reject) => {
        fs.write(fd, string, (err, data) => {
            //错误处理
            if (err) {
                console.log("文件写入失败");
                reject("文件写入失败" + err);
                return;
            }
            console.log(data); //写入的字节数量
            console.log("文件写入成功");
            resolve();
        })
    })
}

//关闭文件函数
function closeFile(fd) {
    return new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            //错误处理
            if (err) {
                console.log("文件关闭失败");
                reject("文件关闭失败" + err);
            }
            console.log("文件关闭成功");
            resolve();
        })
    })
}

(async function () {
    // 异常处理 try...catch
    try {
        //await只能等待一个promise对象
        //await的返回值就是promise对象成功状态的resolve的参数
        const fd = await openFile(filePath);
        await writeFile(fd, "锄禾日当午，汗滴禾下土");
        await closeFile(fd);
    } catch (err) {
        console.log(err);
        console.log("文件出现错误")
    }
})();