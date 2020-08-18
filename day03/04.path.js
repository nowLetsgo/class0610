//path模块需要引入
const path = require("path");
// console.log(path);

//path.resolve()把路径解析为一个绝对路径
//参数可以是一个相对路径（相对启动命令的路径） 所以得到的路径可能是错误的

//如果在当前目录（day03）启动 则 得到的路径是C:\Users\lipeihua\Desktop\class0610\day03\08.path.js
const path1 = path.resolve('./08.path.js')
console.log(path1);


//如果在上级目录（class0610）启动 则 得到的路径是C:\Users\lipeihua\Desktop\class0610\08.path.js
const path2 = path.resolve('./08.path.js')
console.log(path2);


//resolve可以传入多个路径
// 当启动命令在clss0610的时候
// C:\Users\lipeihua\Desktop\class0610\
// C:\Users\lipeihua\Desktop\class0610\today
// C:\Users\lipeihua\Desktop\class0610\today\a
// C:\Users\lipeihua\Desktop\class0610\today\b
// C:\Users\lipeihua\Desktop\class0610\today\b\text.js
const path3 = path.resolve('./today', "./a", '../b', "text.js")
console.log(path3);


//无论在哪里启动，都要得到当前文件夹中的03.procees.js的路径
//先获取当前的文件的绝对路径（无论启动命令在哪里，绝对路径不会发生变化）__dirname
//然后再去根据当前的绝对路径，去找到你要使用的文件路径
const path4 = path.resolve(__dirname, "03.process.js");
console.log(path4)