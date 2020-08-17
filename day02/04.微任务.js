//语义化的微任务定义方式
queueMicrotask(() => {
    console.log(11);
})

//虽然process.nextTick是微任务，但是优先级太高，一般不书写，当我们想要定义一个微任务的时候，可以使用queueMicrotask
process.nextTick(() => {
    console.log(222);
})