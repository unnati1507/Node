const http=require('http');

const myserver=http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('This is the Home Page');
    }
    else if (req.url == '/about'){
        res.end('This is the About us Page');
    }
    else if (req.url == '/contact'){
        res.end('This is the Contact Page');
    }
    else{
        res.end('404 Page Not Found');
    }
})
myserver.listen(8000,()=>{
    console.log('Server is running on port 8000');
})

