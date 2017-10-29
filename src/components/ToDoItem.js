import React from 'react';
import reactDom from 'react-dom';


// class ToDoItem extends React.Component {
// 	render(){
// 		return(
// 		  <li onClick={()=>{ this.props.changeHander(this.props.index);
// 			  }}
// 			  >
// 		  {this.props.details.name}
// 		  </li>
		
// 		)
// 	}
// }
const ToDoItem = (props) => {
    return (
     <li onClick={()=>{props.changeHander(this.props.index);
			  }}
 			  >
 		  {props.details.name}
 		  </li>
    )
   }
export default ToDoItem;