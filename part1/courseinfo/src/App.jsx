import Header from "./Header";
import Content from "./Content"
import Total from "./Total";

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            { part: "Fundamentals of React", excercises: 10 },
            { part: 'Using props to pass data', excercises: 7 },
            { part: 'State of a component', excercises: 14 },
        ]
    }

    let total = 0;
    for (let part of course.parts) {
        total += part.excercises;
    }

    return (
        <div>
            <Header course={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total total={total}></Total>
        </div>
    )
}

export default App
