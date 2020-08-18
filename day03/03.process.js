/* 
    process 是global自带的属性，也可通过require()引入
*/

//获取启动的时候 命令参数
console.log(process.argv);
/* 
    启动命令 node 03.process.js
    [
    'C:\\Program Files\\nodejs\\node.exe',//node命令安装路径
    'C:\\Users\\lipeihua\\Desktop\\class0610\\day03\\03.process.js'//启动文件的绝对路径
  ] 

  启动命令 ：node .\03.process.js hello world
    [
        'C:s\\Program Files\\nodejs\\node.exe',
        'C:\\Uers\\lipeihua\\Desktop\\class0610\\day03\\03.process.js',
        'hello',
        'world'
    ]
  
  */

//根据启动命令 来设置操作
if (process.argv.indexOf("hello") != -1) {
    console.log("你好 欢迎")
} else if (process.argv.indexOf("world") != -1) {
    console.log("滚")
}

//argv0 就是获取node的程序目录
console.log(process.argv0)

//env 属性返回或设置包含用户环境的对象，环境变量：Path --> 遍历每个路径，找到程序运行
// console.log(process.env)
console.log(process.env.NODE_ENV) //我们可以通过process.env.NODE_ENV 来设置当前的环境是开发环境还是生产环境，方便判断


//process.cwd()Node.js 进程的当前工作目录 (启动时候所在的绝对路径，而不是启动文件所在的绝对路径)
console.log(process.cwd());

// process.exit();停止进程
let num = 0;
setInterval(() => {
    num++;
    if (num >= 5) {
        process.exit(); //直接退出当前进程
    }
    console.log(num)
})

console.log("haha")