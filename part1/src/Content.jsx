const Content = (props) => {
    return (
        <div>
            {props.content.map(function (part) {
                return <p>{part.part} {part.excercises}</p>
            })}
        </div>
    )
}

export default Content;