import React from 'react';
const ToDoForm = (props) => {
    return (
       <form>
         <input type="text" value={props.currentState} onChange={props.updateTask}/>
         
       </form>
    )
}

export default ToDoForm;