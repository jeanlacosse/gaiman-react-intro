import logo from './logo.svg';
import './App.css';

// here is how to pull in an exported file
import greet from './greet.js/greet';

function App() {
  // App is a component - everything in react is made up of components
  
  // the app function returns html/JSX
  // works similar to a render to the DOM function

  // can turn a function to have value of html and interpoliate that into 
  // the html code somewhere
  const learnReact = (skill) => {
    // I return the html that I want appended
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        <p>We are in week 11 now! {name} is trying {skill}!</p>
      </a>

    )
  }

  let name = 'Jean-Luc';
  let dayInfo = <h2>The day is today</h2>

  return (
    <div className="App">
      <header className="App-header">
        {dayInfo}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {learnReact('Fun Things!')}

        <p>{greet('jean-luc')}</p>
      </header>
    </div>
  );
};

export default App;
