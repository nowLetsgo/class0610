/* 
    promisify的使用
    promisify是util工具包的一个对象，所以需要require引入

    promisify是把一个普通函数，封装成一个返回promise对象的函数

*/
const fs = require("fs");
const path = require("path")
const {
    promisify
} = require("util");


const filePath = path.resolve(__dirname, "./txt/01.txt");

//把fs.readFile方法处理为一个返回promise对象的方法
//当使用readFile来读取文件的时候，如果读取成功则会返回一个成功状态的promise，否则返回一个失败的状态
const readFile = promisify(fs.readFile);
readFile(filePath)
    .then((data) => {
        console.log(data);
    })