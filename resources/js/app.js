require("./bootstrap");

import Main from "./components/Main";

import Echo from "laravel-echo"
window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'http://localhost:6001' // значение должно быть равным authHost из конфига + порт
});