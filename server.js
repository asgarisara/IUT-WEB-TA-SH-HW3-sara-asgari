var http = require('http');
var qs = require('querystring');
function onRequest( request , response)
{
    console.log("request came to : " + request.url);
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead ( 200 , {"content.type" : "text/html" });
    response.write("<p>ویروس کامپیوتری برنامه ای است که بدون اجازه ی کاربر نسخه هایی از خودش را تکثیر میکند و باعث تغییر و آلوده شدن برنامه های دیگر میشود که دارای انواع مختلفی بوده و ویژگی های متنوعی را نیز دارا میباشد. آنتی ویروس برنامه ای است که برای شناسایی ویروس ها و حفاظت از سیستم در برابر ویروس ها استفاده میشود . آنتی ویروس ها از روش های مختلفی برای شناسایی انواع ویروسها استفاده میکنند چون با استفاده از یک روش نمیتوان همه ی انواع ویروس ها را شناسایی کرد. از گذشته تا به امروز ویروس ها پیشرفت های قابل توجهی داشته اند و به تبع آن آنتی ویروسها هم روز به روز پیشرفته ترشده و از مکانیزم های پیچیده تری استفاده کرده اند تا بتوانند ویروس های جدید را شکست دهند . </p>");
    response.end();
}
http.createServer(onRequest).listen(8080);
console.log('server is on');

