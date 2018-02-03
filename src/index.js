import React ,{Component} from 'react';
import ReactDom from 'react-dom';

class ToDoList extends Component{
    constructor(){
        super()
        this.changeStatus=this.changeStatus.bind(this);
        this.state ={
            tasks:[{
                name:"Reading",
                completed:"false"
            },
            {
                name:"Buy fruits",
                completed:"false"
            },
            {
                name:"Buy Vegitable",
                completed:"false"
            }

            ]
        }
    }
  changeStatus(index){
   // console.log(this.state.tasks[index]);
   var tasks=this.state.tasks;
   var task=tasks[index];
   var completed =!task.completed;
   this.setState({
       tasks:tasks
   });
  }
        render(){
            return(
               <ul>{
               this.state.tasks.map((task,index)=>{
                  return <Todoitem  key={task.name}item={task} index={index} clickHandler={this.changeStatus} />
                })
                } </ul>
            )
        }
}
    const Todoitem = (function(props){
      return  <li onClick={ ()=>{props.clickHandler(props.index)}}>
          {props.item.name}
          </li>
    })
    ReactDom.render(<ToDoList/>,document.getElementById('root'))