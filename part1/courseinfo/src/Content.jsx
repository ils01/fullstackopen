const Part = (props) => {
    return (
        <p>{props.part} {props.excercises}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(function (part) {
                return <Part part={part.part} excercises={part.excercises} />
            })}
        </div>
    )
}

export default Content;