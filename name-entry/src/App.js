import './App.css';
import React, {useState} from 'react';
import List from './List.js';
import Input from './Input';
import Header from './Header';

function App() {
  const [list, setList] = useState(["Nori", "Monroe"]);
  return (
    <div className="App">
      <Header />
      <Input setList={setList} list={list} />
      <List list={list} />
    </div>
  );
}

export default App;
