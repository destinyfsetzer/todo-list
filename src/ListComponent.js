import React from 'react';

function ListComponent(props) {
    console.log("this is first component props", props.items)
    return (
        <div>
        <ul>{props.items.map((item, index) =>{
          return (
          <li key={index}><button onClick={() => props.deleteTodo(index)}>Delete</button>{props.items[index]}</li>
          //inside the delete button you need an onclick handler that calls an anon function
         )})}
        </ul>
        </div>
    )
}

export default ListComponent;