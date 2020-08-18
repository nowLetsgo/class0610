/* 
    fs文件系统
        - nodejs的核心模块  需要require引入
        - 大多数方法有 同步和异步的方法
            - 同步：一般带有sync字样
                会阻塞下边代码的运行
                方法的返回值就是运行的结果（没有回调函数）
            - 异步：
                不会阻塞下边代码
                方法的得到的结果在回调函数中

*/

const fs = require("fs");