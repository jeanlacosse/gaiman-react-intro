import logo from './logo.svg';
// use this to import the css file
import './App.css';
// import our comment component
import Comment from './comment'
// here is how to pull in an exported file
import greet from './greet.js/greet';

// App is a component
// components return HTML
function App (){
  return (
    <div className="App"> 
    <h1>Comments App</h1>

{/* here I can write the component as part of the html itself */}
    <Comment />
    <Comment />
    <Comment />
    </div>
  )
}


export default App;
