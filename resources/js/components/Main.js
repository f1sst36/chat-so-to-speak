import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

const Main = () => {
    const node = useRef();
    useEffect(() => {
        window.Echo.channel("chat").listen("NewMessageEvent", data => {
            console.log("NewMessageEvent", data);
            node.current.innerHTML = data.message['4'];
        });
    }, []);

    return (
        <>
            <h1>Laravel</h1>
            <h1>React</h1>
            <h2>Heroku</h2>
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
