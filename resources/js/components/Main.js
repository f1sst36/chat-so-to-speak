import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

// class Main extends Component {
//     render() {
//         return <h1>Uraaaaa</h1>;
//     }
// }

const Main = () => {
    useEffect(() => {
        window.Echo.channel("chat").listen("NewMessageEvent", data => {
            console.log("NewMessageEvent", data);
        });
    }, []);

    return (
        <>
            <h1>Laravel</h1>
            <h1>React</h1>
            <h2>Heroku</h2>
            <button
                onClick={() => {
                    axios({
                        method: "get",
                        url: process.env.APP_URL + "/test"
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
