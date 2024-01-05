const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (<div>
        <h2>statistics</h2>
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <hr />
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </div>
    </div>)
};
export default Statistics
