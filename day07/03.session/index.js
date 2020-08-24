const http = require("http");
const session = {};

function createSessionId(){
    // 0.12345-->'0.12345'-->"12345"
    const Random = + Math.random().toString().substr(2);//得到一个随机数字
    return (Date.now() + Random).toString(32);//把当前的时间戳和随机数累加
}
// console.log(createSessionId())

http.createServer((req,res)=>{

    //忽略小图标的请求
    if(req.url === '/favicon.ico') return;
    //获取请求的地址信息 通过req.url
    console.log(req.url);
    console.log(req.headers.cookie);

    //判断如果是登录 /login请求的话，我们要把携带的用户信息保存在session对象中
    if(req.url.startsWith('/login')){
        //获取查询字符串 user=lily&pass=123
        //["/login","user=lily&pass=123"] ["user=lily","pass=123"]
        const userMessage = req.url.split("?")[1].split("&").reduce((p,c)=>{
            const [key,value] = c.split("=");
            p[key] = value;
            return p;
        },{})
        //获取到了用户信息，并处理为对象
        // console.log(userMessage);

        //获取到sessionid，并把sessionid：userMessage 装到session对象中
        const unqueID = createSessionId();
        session[unqueID] = userMessage;
        console.log(session)

        //把当前保存用户信息的sessionid 作为cookie值响应给用户
        res.setHeader("Set-Cookie",`session_id=${unqueID};max-age=3600;httpOnly=true`)
        
        res.end("success")
    }

    if(req.url === '/user'){
        const userCookie = req.headers.cookie;
        const cookieResult = userCookie.split("; ").reduce((p, c) => {
            const [key, value] = c.split("="); //["username","lily"]
            p[key] = value;
            return p;
        }, {});
        console.log(cookieResult);//{ session_id: '58mg4bfjmfq' }
        const SessionID = cookieResult["session_id"];
       
        if(session[SessionID]){
            res.setHeader("Content-Type","text/plain;charset=utf-8")
            res.end("登录成功")
            return;
        }

        res.setHeader("Content-Type","text/plain;charset=utf-8")
        res.end("请重新登录")
    }

    
})
.listen(3000,"localhost",(err)=>{
    console.log("请访问 http://localhost:3000")
})