//定义变量决定当前是开发环境还是生产环境
const isDev = true;
const isProd = false;

//定义变量，决定当前的端口号和主机地址
let port = 3000;
let host = "localhost";
let root = process.cwd();//获取启动node命令的绝对路径

// 默认是开发环境，如果isProd为true，则为生产环境的ip和端口
if(isProd){
    port = 80;
    host = "192.168.16.38";
}

//把配置信息暴露出去
module.exports = {
    port,
    host,
    root
}