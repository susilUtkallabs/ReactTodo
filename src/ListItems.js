import React from 'react'

const ListItems = ({lists, setSelectedListItemIndex}) => {

    return (
        <ul>
            {
                lists.map((list, index) => (
                    <li key={list.id}><div className='sidebarList' onClick={()=>{setSelectedListItemIndex(index)}}>{list.listName}</div></li>
                ))
            }
        </ul>
    )
}

export default ListItems