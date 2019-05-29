const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    
    console.log(req.url);
    res.writeHead(200, {'Content-type' : 'text/css'});
    // var fileContents = fs.readFileSync('./css/index.css', {encoding: 'utf8'});
    
    res.writeHead(200, {'content-type': 'text/html'});
    
    
    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        // Add the css route and similarly any other route for js etc
        case '/css/index.css':
            filePath = './css/index.css'
            break;
        default:
            filePath = './404.html'    
    }

    fs.readFile(filePath, function(err,data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
    
}

const server = http.createServer(requestHandler);



server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port:", port);
});