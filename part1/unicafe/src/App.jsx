import { useState } from "react"
import Button from "./Button";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function addGood() {
        let goodPlusOne = good + 1;
        setGood(goodPlusOne);
    }
    function addNeutral() {
        let neutralPlusOne = neutral + 1;
        setNeutral(neutralPlusOne);
    } function addBad() {
        let badPlusOne = bad + 1;
        setBad(badPlusOne);
    }
    return (
        <div>
            <h2>give feedback</h2>
            <div>
                <Button onClick={addGood} text="good"></Button>
                <Button onClick={addNeutral} text="neutral"></Button>
                <Button onClick={addBad} text="bad"></Button>
            </div>
            <h2>statisctics</h2>
            <div>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
            </div>
        </div>
    )
}

export default App
