import Form from './Form.js';
import List from './List.js';
import {useState} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  
  return (
    <div className="App">
      <Form setList={setList} />
      <List list={list} />
    </div>
  );
}

export default App;
