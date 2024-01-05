const StatisticLine = ({ text, value, unit = "" }) => {
    return <tr><td>{text}: {value} {unit}</td></tr>
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good}></StatisticLine>
                    <StatisticLine text="neutral" value={neutral}></StatisticLine>
                    <StatisticLine text="bad" value={bad}></StatisticLine>
                    <StatisticLine text="all" value={all}></StatisticLine>
                    <StatisticLine text="average" value={average}></StatisticLine>
                    <StatisticLine text="positive" value={positive} unit="%"></StatisticLine>
                </tbody>

            </table>
        </>
    )

};

export default Statistics
