import { useState } from 'react';

// component is a function that returns HTML
function Comment() {

    // caling an initial state of a variable on load = initial value = 15 here
    // set up a state variable called points to track our points
    // can set up multiple state variables for multiple things I am tracking

    const [points, setPoints] = useState(15);

    const onUpvote = () => {
        console.log('pointing up');
        // change points here
        setPoints(points + 1);
        // does two things on click:
        // points = points + 1
        // re-render the comment component
    }

    const onDownvote = () => {
        setPoints(points - 1)
    }

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

            <button
            // add an onClick on buttons now that call a function
            // I could pass the entire function into the onCLick as well instead of defining it first if I wanted to
            /* onClick { () => {
                setPoints(points + 1) 
            }}*/
                onClick = {onUpvote}
            >
                +
            </button>
            Points: {points}
            <button
                onClick = {onDownvote}
            >-</button>
        </>
    )
}

// all components need to be exported and imported
export default Comment;