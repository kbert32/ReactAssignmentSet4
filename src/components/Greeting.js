import { useState } from "react";

import Output from "./Output";

function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function changeTextHandler() {
        setChangedText(prevState => {
            return !prevState;
        });
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output><p>It's good to see you!</p></Output>}
            {changedText && <Output><p>Changed!</p></Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
};

export default Greeting;