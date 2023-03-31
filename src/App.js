import Greeting from './components/Greeting';
import Async from './components/Async';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Async />
    </div>
  );
}

export default App;


//More info:
//
//  Jest  - a general javascript testing tool
//  React Testing Library - more documentation about the React testing API
//      -React hooks testing library extension  - extra extension for React Testing Library that makes testing hooks and custom hooks easier
//  https://www.w3.org/TR/html-aria/#docconformance   - more info about roles, (Async component line 14)