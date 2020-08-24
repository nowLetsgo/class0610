//引入puppeteer包
const puppeteer = require('puppeteer');
const { showCompletionScript } = require('yargs');
//async函数，说明里边有的方法是异步的，需要使用await 避免回调地狱
(async () => {
    //实例化一个浏览器对象（打开内部的chromium浏览器）
    const browser = await puppeteer.launch({
        headless: false //有头模式
    });
    //新建一个标签页
    const page = await browser.newPage();
    //在新标签页中输入地址，并跳转
    await page.goto('http://search.dangdang.com/?key=%C7%B0%B6%CB&act=input', {
        waitUntil: "load"
    });
    //在当前标签页中爬取数据
    const books = await page.evaluate(() => {
        const data = [];
        $(".bigimg>li").each((index, item) => {
            const title = $(item).find(".pic").attr("title");
            const imgsrc = $(item).find(".pic>img").attr("src");
            const price = $(item).find(".price .search_now_price").html();
            const detail = $(item).find(".detail").html();
            const url = $(item).find(".name>a").attr("href");
            const obj = {
                title,
                imgsrc,
                price,
                detail,
                url
            }
            data.push(obj);
        })
        return data;
    });

    


    // 等待当前页面数据爬取完成 再去抓取其他数据
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        await page.goto(book.url, {
            waitUntil: 'load'
        })
        const show = await page.evaluate(() => {
            // 书籍介绍
            const showContent = $(".section #preface-show").html();
            return showContent
        })
        book.show = show;
    }

    console.log(books);
    //全部完成之后关闭浏览器
    await browser.close();
})();