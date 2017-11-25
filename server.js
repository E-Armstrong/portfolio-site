var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){
    res.sendFile('./html/index.html', {root: './public'})
})

app.listen(8080, function(){
    console.log('server listening on port 8080')
})