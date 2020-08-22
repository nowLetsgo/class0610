const yargs = require("yargs");
//解决启动命令自定义功能  node server.js port 3001
//当前的yargs会返回一个新的port和host 
//将来server.js使用的是yargs命令提供的port和host  config中提供的port和host仅作为默认值

const {
    port,
    host,
    root
} = require("../config");

const argv = yargs.command('[options]:')
    .option("host",{//扩展一个host命令
        alias:"H",//给host命令配置一个别名
        description:"设置一个主机地址",
        default:host
    })
    .option("port",{//扩展一个port
        alias:"p",//给port命令配置一个别名
        description:"设置一个域名",
        default:port
    })
    .option("dir",{//扩展一个port
        alias:"d",//给port命令配置一个别名
        description:"设置一个域名",
        default:root
    })
    .version()//版本号和帮助  直接书写 version 和help方法即可拥有
    .alias("version","v")//可以给version设置简写
    .help()
    .alias("help","h")
    .argv;//把输入的执行变成一个对象


console.log(argv);
module.exports = argv;
    