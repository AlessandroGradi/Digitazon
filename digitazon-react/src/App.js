import ToDoList from './components/ToDoList'
// import Cells from './components/Cells';
//import { Fetch } from './components/Fetch';
//import { InputCopy } from './components/InputCopy';
//import { Hook } from './components/InputHook';
//import { HookCopy } from './components/InputHookCopy';
//import { MyChat } from './components/Chat';
//import "./components/stylechat.css";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
    <div>
      <ToDoList />
      {/* <Cells /> */}
      {/* <MyChat /> */}
      {/* <InputHookCopy /> */}
      {/* <InputHook /> */}
      {/* <InputCopy /> */}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
