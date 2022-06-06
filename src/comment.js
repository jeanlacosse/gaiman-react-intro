// component is a function that returns HTML
function Comment() {
    return (
        // <> and </> is a react Fragment, wraps code w/o adding another div over the whole thing
        <>
            <div>Comment Component</div>
            <div>
                Jean-Luc 1 month ago
            </div>
            <p>
                React is fun, yay for JSX
            </p>
        </>
    )
}

// all components need to be exported and imported
export default Comment;