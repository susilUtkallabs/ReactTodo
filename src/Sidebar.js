import React, { useContext, useState } from 'react'
import { v4 as uuid } from 'uuid';
import ListItems from './ListItems';
import  CentralState  from './context/centralState.context';

const Sidebar = () => {

    const {lists, setList, selectedListItemIndex, setSelectedListItemIndex } = useContext(CentralState);
    const [listName, setListName] = useState('');

    const addList = ()=>{
        setList((prev)=>{
            const list = [...prev];
            list.push({
                id: uuid(),
                listName,
                allTodos:[]
            });
            return list;
        });
        setListName("");
    }

    return (
        <div className='sidebar'>
            <header>My Lists</header>
            <ListItems lists={lists} setSelectedListItemIndex={setSelectedListItemIndex} />
            <div >
                <input type="text" value={listName} onChange={(e)=>setListName(e.target.value)} placeholder='Add List Name' />
                <button className='btn' onClick={addList}>Add</button>
            </div>
        </div>
    )
}

export default Sidebar