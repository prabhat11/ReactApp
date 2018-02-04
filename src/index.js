import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './components/ToDoItem.js';
import ToDoForm from './components/ToDoForm.js';
class HelloWorld extends React.Component {
   constructor(props){
	   super(props);
	   this.changStatus=this.changStatus.bind(this);
       this.updateTask=this.updateTask.bind(this);
	   this.addTask=this.addTask.bind(this);
	   this.state= {
            Tasks :[
            {
            	name:"Buy Milllk",
            	completed :false
            }, 
            {
            	name:"Buy Vegitable",
            	completed :false
            },
            {
            	name:"Buy sprout",
            	completed :false
            },
            {
            	name:"Buy Fruit",
            	completed :false
            }
			],
			currentState:''
		}
   }
   changStatus(index){
	   var tasks=this.state.Tasks;
	   var task=tasks[index];
	   console.log(task.name)
	   }
  
   addTask(){

   } 
   updateTask(evt){
	   this.setState({
		   currentState:evt.target.value
	   })
   }
	render (){
		return (
			<section>
				<ToDoForm   updatestate={this.updateTask}/>
			<ul>
			{
			this.state.Tasks.map((singleTask,index) =>{
			 return <ToDoItem changeHander={this.changStatus} 
			 index={index} 
			 key={singleTask.name} 
			 details={singleTask}/>
			}
			)
			}
			</ul>
			</section>
		)
	}
}
ReactDOM.render(<HelloWorld/>,document.getElementById('root'))