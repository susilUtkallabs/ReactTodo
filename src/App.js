import './index.css'
import './App.css';
import Sidebar from './Sidebar';
import Todos from './Todos';
import { useEffect, useState } from 'react';

function App() {

  const [lists, setList] = useState([]);
  const [selectedListItemIndex, setSelectedListItemIndex] = useState("");

  // useEffect(()=>{
  //   console.log("all lists", lists);
  // },[lists]);

  return (
    <div className="app">
      <div className="wrapper">
          <Sidebar lists={lists} setList={setList} setSelectedListItemIndex={setSelectedListItemIndex}  />
          <Todos lists={lists} setList={setList} selectedListItemIndex={selectedListItemIndex} />
      </div>
    </div>
  );
}

export default App;
