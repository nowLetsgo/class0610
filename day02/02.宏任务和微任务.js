/* 
    微任务和宏任务：
        宏任务：是宿主环境提供的任务，包含了 事件轮询机制中的各种回调函数（timer阶段 poll阶段。。。。）
        微任务：包含了process.nextTick（最先执行）,promise.then...(其他的微任务按照书写顺序执行)
        微任务优先级高于宏任务，并且事件轮询每次到一个新的阶段之前，都会检查微任务队列
        微任务中如果新添加了微任务，则把新添加的微任务放到下一个微任务队列执行

*/

/* //2 5 1 4 3 6
process.nextTick(() => { //微任务
    console.log(111);
});
const promise = new Promise(resolve => {
    console.log(222); //同步
    resolve();
});

setTimeout(() => { //宏任务
    console.log(333);
}, 0);

promise.then(() => { //微任务
    console.log(444);
});

setImmediate(() => { //宏任务
    console.log(666);
});
console.log(555); //同步 */




/* //5 4 2 1
process.nextTick(() => {//微任务
    console.log('process.nextTick() 444');
})

setTimeout(() => {//宏任务
    console.log('setTimeout()  222');
}, 0)

setImmediate(() => {//宏任务
    console.log('setImmediate() 111');
})


//同步代码
console.log('全局代码执行完了 555'); */



//1 4 8 5 2 3 9 6
process.nextTick(() => {
    console.log(111); //微任务
});

setTimeout(() => {
    console.log(222); //timers宏任务
}, 0);
setImmediate(() => {
    console.log(333); //check宏任务
});

const promise = Promise.resolve();

promise
    .then(() => {
        console.log(444); //微任务
        process.nextTick(() => {
            console.log(555); //下一个微任务
        });
        setTimeout(() => {
            console.log(666); //timers宏任务
        }, 0);
    })
    .catch(() => {
        console.log(777);
    })
    .then(() => {
        console.log(888); //微任务
        setImmediate(() => {
            console.log(999); //check阶段 宏任务
        });
    })
    .catch(() => {
        console.log(101010);
    })