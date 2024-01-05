import Header from "./Header";
import Content from "./Content"
import Total from "./Total";

const App = () => {
    const course = "Half Stack application development";
    const content = [
        { part: "Fundamentals of React", excercises: 10 },
        { part: 'Using props to pass data', excercises: 7 },
        { part: 'State of a component', excercises: 14 },
    ]
    let total = 0;
    for (let part of content) {
        total += part.excercises;
    }

    return (
        <div>
            <Header course={course}></Header>
            <Content content={content}></Content>
            <Total total={total}></Total>
        </div>
    )
}

export default App
