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

// function App() {
//   // App is a component - everything in react is made up of components

//   // the app function returns html/JSX
//   // works similar to a render to the DOM function

//   // can turn a function to have value of html and interpoliate that into 
//   // the html code somewhere
//   const learnReact = (skill) => {
//     // I return the html that I want appended
//     return (
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//         <p>We are in week 11 now! {name} is trying {skill}!</p>
//       </a>

//     )
//   }

//   let name = 'Jean-Luc';
//   let dayInfo = <h2>The day is today</h2>

//   return (
//     <div className="App">
//       <header className="App-header">
//         {dayInfo}
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {learnReact('Fun Things!')}

//         <p>{greet('jean-luc')}</p>
//       </header>
//     </div>
//   );
// };

export default App;
