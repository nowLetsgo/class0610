/* 
    Buffer:
        1:byte 1字节
        英文字符是 1个字节
        中文是3个字节
        1byte ===> 8bit （00000000-11111111）
        1kb === 1024byte
        1mb === 1024kb
        1gb === 1024mb
        1tb === 1024gb
*/

// console.log(Buffer); //打印出Buffer对象可以查看到方法
/* [Function: Buffer] {
    poolSize: 8192,
    from: [Function: from],
    of: [Function: of],
    alloc: [Function: alloc],
    allocUnsafe: [Function: allocUnsafe],
    allocUnsafeSlow: [Function: allocUnsafeSlow],
    isBuffer: [Function: isBuffer],
    compare: [Function: compare],
    isEncoding: [Function: isEncoding],
    concat: [Function: concat],
    byteLength: [Function: byteLength],
    [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
  } */

const buff1 = Buffer.alloc(10);
//在内存中找到一篇区域，清空内容并创建一个空的buffer
console.log(buff1); //<Buffer 00 00 00 00 00 00 00 00 00 00>

//当计算机内存不要的时候，是等待空闲才会把当前内存的数据清除
//allocUnsafe 就是直接找了一个空闲的区域，但是这个区域中可能还有一些垃圾数据
//但是这种方法创建的buffer最快速
const buff2 = Buffer.allocUnsafe(10);
console.log(buff2); //<Buffer 98 38 71 03 6a 01 00 00 00 00>

//第二个参数是fill 填充buffer数据 但是长度确定 内容要填充完整  
const buff3 = Buffer.alloc(10, "todayis");
console.log(buff3) //<Buffer 74 6f 64 61 79 74 6f 64 61 79>
console.log(buff3.toString());

//Buffer.from 根据传入内容的长度 创建一个Buffer 
const buff4 = Buffer.from('atguigu尚硅谷');
console.log(buff4);

//Buffer可以通过forEach遍历出来
buff4.forEach((item, index) => {
    console.log(item); //转换成10进制打印出来了
})

//Buffer可以通过toString方法展示出buffer的数据
console.log(buff4.toString())