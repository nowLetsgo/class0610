const pug = require("pug");
const path = require("path");

const filePath = path.resolve(__dirname,"./views.pug");

const htmlstr = pug.renderFile(filePath,{
    isShow:true,
    Person:[
        {name:"xiaowang",age:18},
        {name:"dawang",age:18},
        {name:"laowang",age:18},
        {name:"zhongwang",age:18},
    ]
})
console.log(htmlstr);




