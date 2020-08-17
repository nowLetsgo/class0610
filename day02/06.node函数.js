//打印arguments所在的函数 并转成字符串显示
console.log(arguments.callee.toString())
/* 
//每一个node模块外层都有一个函数，函数有5个参数，当node启动的时候，会自动调用这个函数
function (exports, require, module, __filename, __dirname) {
    console.log(arguments.callee.toString())
}
exports:exports对象，指向的是module.exports
require：引入模块的方法
module：module对象
__filename：文件的绝对路径
__dirname：文件夹的绝对路径

*/
console.log(__filename); //直接就可以使用