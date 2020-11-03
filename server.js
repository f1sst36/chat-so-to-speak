// var server = require('http').Server();
// var io = require('socket.io')(server);
// var Redis = require('ioredis');
// var redis = new Redis();

// redis.subscribe('chat-channel');
// redis.on('new-message', function(channel, message){
//     message = JSON.parse(message);

//     io.emit(channel + ':' + message.event, message);
// });

// server.listen(3000);

/////////////////////////////////////////////

// var io = require('socket.io')(6001);
// var Redis = require('ioredis');
// var redis = new Redis();

// redis.psubscribe('*', () => {
//     console.log("redis psubscribe");
// });

// redis.on('chat-channel', function(pattern, channel, message){
//     console.log(channel, message);
// });

/////////////////////////////////////////////

// const http = require("http").Server();
// const io = require("socket.io")(http);
// const Redis = require("ioredis");

// const redis = new Redis();
// redis.subscribe("chat");

// redis.on("message", function (channel, message) {
//     console.log("Message recieved: " + message);
//     console.log("Channel: " + channel);
//     message = JSON.parse(message);
//     io.emit(channel + ":" + message.event, message.data);
// });

// http.listen(3000, function () {
//     console.log("Listening on Port: 3000");
// });



// npm run watch

// laravel-echo-server start

// php artisan queue:work