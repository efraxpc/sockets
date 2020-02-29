var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {

    console.log(data);

});

function clickStatus(){
    console.log('retrieving messages')
    socket.emit('messages');
}
