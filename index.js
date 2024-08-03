const port = 3001;
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let log = `${Math.floor(Math.random() * 100)}: ${req.url} \n`;

    fs.readFile('index.html', 'utf-8', (err, data) => {
      
        if(!err){
            
            res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
            fs.appendFile('log.txt', log, (err) => {
                if (!err){
                    console.log('Log saved to file');
                }
            });
        }

        console.log(`${Math.floor(Math.random() * 100)}:new page..`);
        console.log(req.url);
        console.log('Server is running');

    });
    // if (req.url == '/') {
    //     console.log('default:new file');
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<h2>Welcome to Server....</h2>');
    // } else if (req.url == '/about') {
    //     console.log('about:new file');
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<p>About page content here....</p>');
    // } else {
    //     console.log('page not found');
    //     res.statusCode = 404;
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.end('Page not found');
    // }
});

server.listen(port, (err) => {
    if (!err) {
        console.log(`Server started on http://localhost:${port}`);
    }
});
