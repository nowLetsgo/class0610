// setTimeout和setInterval 是和window中的计时器一样
// setImmediate 相当于延迟0秒的计时器， 立即执行函数， 但是不一样是最先执行的
// process.nextTick() 立即执行函数 当开始执行异步代码的时候就直接执行了

setImmediate(() => {
    console.log(3)
})

process.nextTick(() => {
    console.log(4);
})
const timer1 = setInterval(() => {
    console.log(1)
    clearInterval(timer1);
}, 1)

setTimeout(() => {
    console.log(2);
}, 1)