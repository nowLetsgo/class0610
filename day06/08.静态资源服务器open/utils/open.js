const {exec} = require("child_process");

function open(url){
    //platForm获取系统标识
    const platForm = process.platform;
    console.log(platForm)

    let cmd = "";
    //switch判断
    switch(platForm){
        case 'win32'://window
            cmd = "start";
            break;
        case 'darwin'://macOS
            cmd = "open";
            break;
        case 'linux'://Linux
            cmd="xdg-open"
            break;
    }

    // exec可以执行commad命令
    exec(`${cmd} ${url}`);
}

module.exports = open;