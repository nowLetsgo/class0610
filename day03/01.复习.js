/* 
    - nodejs 事件轮询
        1. timers --> setTimeout 和 setInterval计时器
        2. pending --->系统回调函数
        3. idle prepare-->node内部操作
        4. poll -->I/O等异步操作
            当poll阶段为空的时候，就会一直等待
                1.计时器超时
                2.check阶段有setImmediate
        5. check -->setImmediate
        6. close --> 关闭

    - 宏任务和微任务
        宏任务和微任务都是异步代码，但是执行顺序有区别
        宏任务：setTimeout 、 setInterval 、setImmediate、等等一步操作
        微任务：process.nextTick、queueMicrotask、promise.then/catch/finally
        微任务要优先于宏任务执行，事件轮询的时候，每到下个阶段，都会去检查微任务队列
        微任务中如果嵌套了微任务，则放入下一个微任务队列

    - 谈一下 nodejs 模块化
        - 模块的定义
            nodejs的模块就是一个js文件
            模块中包含了一个或多个功能
            可以使用module.exports或exports来暴露功能
            其中module.exports所指向的对象，就是真正暴露的对象
            而exports只是默认指向了module.exports默认的指向的对象
            如果修改了module.exports的对象指向，则exports就不再具备暴露功能

        - 模块的引入
            使用require()引入模块
            如果功能过多，则可以使用解构赋值的方法


        - 模块的标识
            模块分类：
                1.引入自有模块 直接书写包名
                2.第三方模块，需要npm下载相应的包  然后在直接书写包名
                3.自定义模块，首先自定义模块需要一个暴露，然后直接书写自定义模块的路径
                        必须添加 ./或../
                        可以省略后缀 会按照 js  json  node 依次尝试添加

    - nodejs 函数的参数及解释
        nodejs的每一个模块都有自己的外层的函数，通过arguments.callee.toString()查看
        函数有默认的5个参数
            - exports：指向module.exports对象的对象
            - require：引入模块的方法名
            - module：包含当前模块的信息（路径、exports、寻找包的遍历地址）
            - __filename:文件的绝对路径
            - __dirname :当前所在文件夹的绝对路径

    - npm 的基础操作
        初始化仓库 npm init / npm init -y(包名不要写中文)
        下载jquery到生产环境 npm i jquery / npm i jquery --save / npm i jquery -S
        下载ora到开发环境 npm i ora --save-dev / npm i ora -D
        安装全局命令less npm i less -g
        删除ora的包 npm r ora
        下载所有package.josn的包  npm i

*/

const timer1 = setInterval(() => {
    console.log(1)
}, 100)

setTimeout(() => {
    clearTimeout(timer1)
}, 1000)

const ImmedTimer = setImmediate(() => {
    console.log("setImmediate")
});
//要在setImmediate执行之前清掉setImmediate 否则 setImmediate运行后就没有清的必要了
process.nextTick(() => {
    clearImmediate(ImmedTimer);
})
//因为process.nextTick优先级最高
//我们如果想要定一个微任务，那么可以使用queueMicrotask方法（语义化的定义一个微任务）
queueMicrotask(() => {

});
console.log(global)