import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import io from "socket.io-client";

import axios from "axios";

//import Pusher from "pusher-js";
//var pusher;
const Main = () => {
    const node = useRef();
    useEffect(() => {
        // window.Echo.channel("chat").listen("NewMessageEvent", data => {
        //     console.log("NewMessageEvent", data);
        //     node.current.innerHTML = data.message['4'];
        // });

        const Pusher = require("pusher-js");

        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher("657da11b3b498151a232", {
            cluster: "eu",
            authEndpoint: "http://localhost/socket/auth"
        });

        var channel = pusher.subscribe("private-channel");
        channel.bind("NewMessage", function(data) {
            console.log(JSON.stringify(data));
        });

        // var pusher = new Pusher("657da11b3b498151a232", {
        //     cluster: "eu",
        //     authEndpoint: "http://localhost/socket/auth"
        // });

        // var channel = pusher.subscribe("private-chat");
        // channel.bind("NewMessageEvent", function(data) {
        //     console.log("NewMessageEvent", data);
        //     //node.current.innerHTML += data.message.text;
        // });
    }, []);

    return (
        <>
            <h1>Laravel</h1>
            <h1>React</h1>
            <p ref={node}></p>
            <button
                onClick={() => {
                    axios({
                        method: "get",
                        url: "http://localhost/test"
                    })
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }}
            >
                Click
            </button>
        </>
    );
};

export default Main;

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
