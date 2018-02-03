import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './components/ToDoItem.js';
import ToDoForm from './components/ToDoForm.js';
class HelloWorld extends React.Component {
   constructor(){
	   super();
	   this.changStatus=this.changStatus.bind(this);
	   this.updateTask=this.updateTask.bind(this);
	   this.addTask=this.addTask.bind(this);
	   this.state= {
            Task :[
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
	   var tasks=this.state.Task;
	   var task=tasks[index];
	   this.setState({
		   Task:task
	   })
   }
   addTask(){

   }
   updateTask(evt){
	   this.setState({
		   currentState:this.target.value
	   })
   }
	render (){
		return (
			<section>
				<ToDoForm/>
			<ul>
			{
			this.state.Task.map((Task,index) =>{
			 return <ToDoItem changeHander={this.changStatus} index={index} key={Task.name} details={Task}/>
			}
			)
			}
			</ul>
			</section>
		)
	}
}
ReactDOM.render(<HelloWorld/>,document.getElementById('root'))