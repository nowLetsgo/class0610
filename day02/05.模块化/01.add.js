function add(...rest) {
    return rest.reduce((p, c) => p + c, 0)
}

/* 
    module.exports就是暴露的对象(无论你添加还是直接覆盖，他永远都是暴露出去的对象)
        如果说暴露的是一个对象 那么可以书写module.exports.XXX= XXX
            也可以书写 module.exports={XXX:XXX}
        如果说暴露的是一组对象，那么可以直接书写module.exports={XXX:XXX,XXX:XXX}

        如果直接暴露，module.exports = add,暴露的对象就是add函数
*/
// module.exports.add = add; //接受的就是{add:add}
/* module.exports = {
    add: add
}; */

module.exports = add;