import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[text, setText] = useState('')

  return (
    <div className="App">
      <h1>text</h1>

      <input className="form-control" name="text"></input>
    </div>
  );
}

export default App;
