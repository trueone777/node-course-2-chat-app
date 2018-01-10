const socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Hey. This is Andrew.'
    });
});

socket.on('disconnect', function()  {
    console.log('Disconnect from server');
});


socket.on('newMessage', function (newMessage) {
    console.log(newMessage);
});