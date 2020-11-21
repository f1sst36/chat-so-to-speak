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

// Dont forget turn on Redis server (redis-cli ping => PONG)

//php artisan passport:install

//lit-sierra-15802




// const Pusher = require("pusher-js");

// var pusher = new Pusher("657da11b3b498151a232", {
//     cluster: "eu",
//     authEndpoint: "http://localhost/socket/auth"
//     //encrypted: true,
// });

// channel = pusher.subscribe("private-chat");
// channel.bind("NewMessage", function(data) {
//     console.log("NewMessage", data);
//     node.current.innerHTML += data.message.text;

//     channel.trigger("client-new-message", "test data from client");
// });
// // channel.bind('pusher:subscription_succeeded', function() {
// //     channel.trigger('client-new-message', { your: 123 });
// // });
// channel.bind("client-new-message", function(data) {
//     console.log("client-new-message", data);
//     node.current.innerHTML += data + "<br />";
// });

// onClick={() => {
//     channel.trigger("client-new-message", "test data from client");
