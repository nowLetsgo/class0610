/* //start  promise end  then1 then2 setTimeout

console.log('start') //同步

setTimeout(() => {
    console.log('setTimeout') //宏任务
}, 0)

new Promise((resolve) => {
        console.log('promise') //同步
        resolve()
    })
    .then(() => {
        console.log('then1') //微任务
    })
    .then(() => {
        console.log('then2') //微任务
    })

console.log('end') //同步 */





// script start-- > async2 end-- > Promise-- > script end-- > async1 end-- > promise1-- > promise2-->setTimeout

console.log('script start') //同步

async function async1() {
    await async2();
    console.log('async1 end') //微任务
}
async function async2() {
    console.log('async2 end') //同步
}
/* function async1() {
    new Promise((resolve) => {
        console.log('async2 end') //同步
        resolve()
    }).then(() => {
        console.log('async1 end') //微任务
    })
} */
async1()

setTimeout(function () {
    console.log('setTimeout') //宏任务
}, 0)

new Promise(resolve => {
        console.log('Promise') //同步
        resolve()
    })
    .then(function () {
        console.log('promise1') //微任务
    })
    .then(function () {
        console.log('promise2') //微任务
    })

console.log('script end') //同步