import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listIems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                 <p>{/*{item.text} this is not for editing the text and for editing the text we have to add input */}
                 <input type="text"
                 id={item.key}
                 value={item.text}
                 onChange={
                     (e) => {
                         props.setUpdate(e.target.value, item.key)
                     }
                 }/>
                <span>
                    <FontAwesomeIcon 
                    className="fas fa-trash"
                     icon='trash'
                     onClick={() => props.deleteItem(item.key)} />
                </span>
                </p>
                
            </div>
        })
   
    return(
        <div>
            {/* adding animation */}
            <FlipMove duration={300} easing="ease-in-out">
            {listIems}

            </FlipMove>
            </div>

    )

}
export default ListItems;

