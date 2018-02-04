import React from 'react';
/* const ToDoItem = ((props)=>{
    return (
     <li onClick={(props)=>{props.changeHander(props.index);
			  }}
 			  >
 		  {props.details.name}
            </li> ) 
    
   }) */

const ToDoItem = (function(props){
    return  <li onClick={ ()=>{props.changeHander(props.index)}}>
        {props.details.name}</li>})
export default ToDoItem;