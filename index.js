// const http=require('http');

// const myserver=http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end('<h1> ABES ENGINEERING COLLEGE </h1>');
//     }
//     else if (req.url == '/about'){
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<img src="https://abes.ac.in/assets/2.jpg" width="900">');
//     }
//     else if (req.url == '/contact'){
        
//         res.end('<h1> Address: 19th KM Stone, NH-09, Ghaziabad, PIN - 201009. UP, India.</h1>');
//     }
//     else{
//         res.end('404 Page Not Found');
//     }
// })
// myserver.listen(8000,()=>{
//     console.log('Server is running on port 8000');
// })

const fs = require('fs');

// fs.writeFileSync("hello.txt", "This is Unnati Mishra", (err, result) => {
//     if (err) {
//         console.log("error",err);
//     }
//     else {
//         console.log(result);
//     }
// })
//const result =fs.readFileSync("hello.txt", "utf-8");
//console.log(result);
// fs.cpSync("hello.txt", "hi.txt");
// fs.copyFile("hello.txt", "hi.txt", ()=>{});
// fs.unlink("hi.txt", ()=> {});
const os = require('os');
console.log("platform", os.platform());
console.log("userinfo", os.userInfo());
console.log("CPU", os.arch());
console.log("free memory", os.freemem());
console.log("total memory", os.totalmem());
console.log("rebootingtime", os.uptime());
console.log("home dir", os.homedir());
console.log("hostname", os.hostname());