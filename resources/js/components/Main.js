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
            console.log(data);
        });
    }, []);

    return (
        <>
            <h1>Uraaaaa</h1>
            <button
                onClick={() => {
                    axios({
                        method: "post",
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