//引入一个events包
const EventEmitter = require('events');

//创建一个MyEmitter类 继承了引入的EventEmitter类
class MyEmitter extends EventEmitter {}

//实例化MyEmitter的类
const myEmitter = new MyEmitter();


//实例化对象可以使用on来定义一个事件
myEmitter.on('event', () => {
    console.log('触发事件');
});

// 还是这个实例化对象，可以使用emit来调用你自己定义的事件
myEmitter.emit('event');
myEmitter.emit('event');


myEmitter.once("haha", () => {
    console.log("笑个鬼哦~")
})

myEmitter.emit("haha");
myEmitter.emit("haha");