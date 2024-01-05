import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    let copy;
    if (!copy) {
        copy = {};
        anecdotes.forEach((anecdote, index) => {
            copy[index] = 0;
        })
    }

    let newSelected = selected;
    const [points, setPoints] = useState(copy);

    function updateSelected() {
        newSelected = Math.floor(Math.random() * anecdotes.length)
        setSelected(newSelected);

    }
    function vote() {

        const copy = { ...points };
        copy[newSelected] += 1;
        if (copy[newSelected] > copy[maxIndex]) {
            setMaxIndex(newSelected);
        }
        setPoints(copy);
    }
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>this anec. has {points[selected]} votes</p>
            <p><button onClick={vote}>vote</button></p>
            <p><button onClick={updateSelected}>next</button></p>
            <h2>Anecode with most votes</h2>
            <p>{anecdotes[maxIndex]}</p>
            <p>this anec. has {points[maxIndex]} votes</p>
        </div >

    )
}

export default App