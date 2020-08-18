const fs = require("fs");
const path = require("path");

/* 
    写入：
        - openSync
            fs.openSync(path[, flags, mode])
            flag:
                'r': 打开文件用于读取。 如果文件不存在，则会发生异常 (默认)
                'a': 打开文件用于追加。 如果文件不存在，则创建该文件。
                'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
            mode:默认值一般是0o666 一般不会修改（尤其windows系统）
        - writeSync
            fs.writeSync(fd, buffer[, offset[, length[, position]]])
            - fd 打开的文件的标识
            - buffer 写入的内容  可以是buffer 也可以是字符串
            - offset 书写的位置
        - closeSync
            - 方法书写打开的文件

*/

//为了确保打开路径正确，所以先使用path.resolve方法处理 你需要的路径
const filePath = path.resolve(__dirname, './txt', "01.txt");
console.log(filePath) //获取正确的路径

//打开文件
const fd = fs.openSync(filePath, "a", 0o666);
console.log(fd) //代表当前文件的识别码

//写入文件
const result = fs.writeSync(fd, "今天天气真好111");
console.log(result); //18  字节数

//关闭文件
const resultClose = fs.closeSync(fd);
console.log(resultClose); //关闭文件没有返回值

//等待读写完成才会执行
console.log(1);