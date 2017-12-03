/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
import React from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends React.Component {
	
   constructor(){
	   super();
	   this.changStatus=this.changStatus.bind(this);
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
			]
		}
	   
   }
   changStatus(index){
	   var tasks=this.state.Task;
	   var task=tasks[index];
	   console.log('hi');
	   this.setState({
		   Task:tasks
	   })
   }

	render (){
		return (
			<ul>
			{
			this.state.Task.map((Task,index) => {
			 return <ToDoItem changeHander={this.changStatus} index={index} key={Task.name} details={Task}/>
			}
			)
			}
			</ul>
		)
	}
}
class ToDoItem extends React.Component {
	render(){
		return(
		  <li onClick={()=>{ this.props.changeHander(this.props.index);
			  }}
			  >
		  {this.props.details.name}
		  </li>
		
		)
	}
}
ReactDOM.render(<HelloWorld/>,document.getElementById('root'))