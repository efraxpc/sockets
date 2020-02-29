var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Sequelize = require('sequelize');

app.use(express.static('public'))


var sequelize = new Sequelize('bebyte', 'root', 'mt>kCHHZPq[5.y4T', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorAliases: false
});

//const sequelize = new Sequelize('mysql://efraxpc:mt>kCHHZPq[5.y4T@localhost:3306/bebyte');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.get('/', function(req, res){
    res.status(200).send('HELLO WORLD')
})

var messages = [{

    author: "Carlos",

    text: "Hola! que tal?"

},{

    author: "Pepe",

    text: "Muy bien! y tu??"

},{

    author: "Paco",

    text: "Genial!"

}];


io.on('connect', function(socket) {
    console.log('Un cliente se ha conectado');
    //socket.emit('messages', messages);

    socket.on('messages',function(data){
        io.sockets.emit('messages',messages)
    })
});


server.listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080');
});




