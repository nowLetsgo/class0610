const os = require("os");
const jquery = require("jquery");

function add(x, y) {
    return x + y;
}

function sum(x, y) {
    return x + y;
}
//可以通过这样的方式一次暴露两个
/* module.exports = {
    add,
    sum
}; */


//可以用两条exports语句暴露两个
/* exports.add = add;
exports.sum = sum; */


//只能添加add对象，因为只有module.exports指向的对象才能暴露出去
//我们修改了module.exports对象的指向，但是exports的指向没有发生变化，所以再修改exports也没用
module.exports = add;
exports.sum = sum;


/* 
    Module {
        id: '.',
        //当前文件的目录（文件夹的路径地址） 绝对路径
        path: 'C:\\Users\\lipeihua\\Desktop\\class0610\\day02\\05.模块化',
        //暴露的对象
        exports: { add: [Function: add] },
        //当前的模块是否是引入其他模块
        parent: null,
        //文件的路径名 绝对路径
        filename: 'C:\\Users\\lipeihua\\Desktop\\class0610\\day02\\05.模块化\\05.module对象.js',
        loaded: false,
        children: [],
        paths: [
        'C:\\Users\\lipeihua\\Desktop\\class0610\\day02\\05.模块化\\node_modules',
        'C:\\Users\\lipeihua\\Desktop\\class0610\\day02\\node_modules',
        'C:\\Users\\lipeihua\\Desktop\\class0610\\node_modules',
        'C:\\Users\\lipeihua\\Desktop\\node_modules',
        'C:\\Users\\lipeihua\\node_modules',
        'C:\\Users\\node_modules',
        'C:\\node_modules'
        ]
    } 
    */