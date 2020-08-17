function mins(x, y) {
    return x - y;
}
/* 
    exports本身是不具备暴露的功能，但是我们修改exports的时候，其实是修改了module.exports
    所以exports才拥有暴露的功能

    exports是指向的module.exports的对象地址的一个新对象

    千万不要直接使用exports = xxx来暴露，这样就不会指向module.exports  就无法暴露

*/
// exports.mins = mins;
exports = mins;