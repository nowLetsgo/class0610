/* //如果说暴露是通过module.exports.add = add; //接受的就是{add:add}
//那如果想要使用add 则通过解构赋值 或 add.add

//如果说暴露是通过module.exports = { add: add };
const {add} = require('./01.add.js');
console.log(add(1, 2, 3, 4, 5)) */


/* //如果暴露方法是module.exports = add;
const add = require("./01.add.js");
console.log(add(1, 2, 3, 4, 5)) */


//如果使用的是exports.mins = mins; 返回的是一个exports对象，mins只是对象的一个方法
const {
    mins
} = require("./02.mins.js");
console.log(mins)