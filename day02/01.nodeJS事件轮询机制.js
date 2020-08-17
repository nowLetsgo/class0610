/* 
    node 事件轮询机制

    1.timers：主要用来处理setTimeout和setInterval的回调函数
    2.pending callback：主要是处理系统的一些回调
    3.idle prepare：处理nodejs内部的操作
    4.poll ：处理一些I/o操作
        - 1.当poll中有回调队列成员，则回调队列执行完毕后或到达最大回调数，进入到下个阶段
        - 2.当poll是空的时候，那么此时需要两个条件才能执行到下个阶段
            - 1.timers队列中的计时器超时了
            - 2.下个阶段check阶段 设置了setImmediate的时候，就直接进入到下个阶段
    5.check：专门处理setImmediate的回调函数
    6.close阶段：专门执行关闭的回调函数

*/