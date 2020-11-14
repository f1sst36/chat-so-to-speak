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
            <h1>Laravel</h1>
            <img
                src="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw
                    AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz
                    ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp
                    a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl
                    ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis
                    F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH
                    hhx4dbgYKAAA7"
                height="16px"
                width="16px"
                alt="какая-то картинка"
            />

            <button
                onClick={() => {
                    axios({
                        method: "get",
                        url: "http://d601034939bf.ngrok.io/test"
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
