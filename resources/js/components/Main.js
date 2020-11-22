import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import io from "socket.io-client";

import axios from "axios";
var socket;
const Main = () => {
    const node = useRef();
    useEffect(() => {
        // window.Echo.channel("chat").listen("NewMessageEvent", data => {
        //     console.log("NewMessageEvent", data);
        //     node.current.innerHTML = data.message['4'];
        // });

        socket = io("http://localhost:6001");

        console.log(socket.id); // undefined

        socket.on("connect", () => {
            console.log(socket.id); // 'G5p5...'
        });

        socket.on("NewMessageEvent", data => {
            console.log(data);
        });

        // socket.onAny((event, ...args) => {
        //     console.log(`got ${event}`);
        // });
    }, []);

    return (
        <>
            <h1>Laravel</h1>
            <h1>React</h1>
            <p ref={node}></p>
            <button
                onClick={() => {
                    socket.emit('NewMessageEvent', 'Hey world');
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
