import logo from './logo.svg';
// use this to import the css file
import './App.css';
// import our comment component
import Comment from './comment'
// here is how to pull in an exported file
import greet from './greet.js/greet';

// grab use state prop from react
import { useState } from 'react';

// App is a component
// components return HTML
function App() {
  const [appName, setAppName] = useState('Comments App')
  // appNameInput wil hold value from input field
  const [appNameInput, setAppNameInput] = useState('')

  const onSubmitAppName = (evt) => {
    evt.preventDefault(); // don't reload the page
    console.log('onSubmitAppName', appNameInput)

    // need to set the app name to the input value
    setAppName(appNameInput);

    // this will reset the input value to nothing
    setAppNameInput('')
  }

  return (
    <div className="App">
      <h1>{appName}</h1>

      <p>
        <h3>Go ahead, rename the app</h3>
        <form onSubmit={onSubmitAppName} >
          <input
            type="text"
            placeholder="new app name"
            // this is taking the appNameInput and reseting its value which will be ''
            value={appNameInput}
            onChange={(evt) => {
              // $(this).val
              console.log(evt.target, evt.target.value); // vanilla version of $(this), 
              // the actual html input per line written

              // update appNameInput to be value of this input element
              setAppNameInput(evt.target.value)
            }}
          />
          <button>Change it!</button>
        </form>
      </p>

      {/* here I can write the component as part of the html itself */}
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}


export default App;
