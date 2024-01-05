import { useState } from "react"
import Button from "./Button";
import Statistics from "./Statistics.jsx";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);
    let newGood = good;
    let newNeutral = neutral;
    let newBad = bad;
    let newAll = all;
    let newAvg = average;
    let newPos = positive;

    function updateAll() {
        newAll = (newGood || 0) + (newNeutral || 0) + (newBad || 0);
        setAll(newAll);
    }
    function updateAvg() {
        newAvg = ((newGood || 0) - (newBad || 0)) / newAll;
        setAverage(newAvg)
    }
    function updatePos() {
        newPos = (newGood || 0) / (newAll) * 100
        setPositive(newPos)
    }
    function upd() {
        updateAll();
        updateAvg();
        updatePos();
    }
    function addGood() {
        newGood = good + 1;
        setGood(newGood);
        upd();
    }
    function addNeutral() {
        newNeutral = neutral + 1;
        setNeutral(newNeutral);
        upd();
    } function addBad() {
        newBad = bad + 1;
        setBad(newBad);
        upd();
    }
    return (
        <div>
            <h2>give feedback</h2>
            <div>
                <Button onClick={addGood} text="good"></Button>
                <Button onClick={addNeutral} text="neutral"></Button>
                <Button onClick={addBad} text="bad"></Button>
            </div>
            <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} all={all} />

        </div>
    )
}

export default App
