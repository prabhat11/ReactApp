import React , {Component}  from 'react'
import ReactDom from 'react-dom';
import $ from 'jquery'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			users:[]
		}

	}
   componentDidMount(){
	   $.ajax({
		   url:'https://jsonplaceholder.typicode.com/user',
		   success:(data)=>{
			this.setState({
				users:data
			})   
		   },
		   error:()=>{
			    alert('your request is incorrect')}
	   })
   }

  render(){
   const {users} =this.state;
	  return(
		<ul> {
         users.map((user) => {
			return <li>{this.name} </li>
		 })
 
		} </ul>	  
	  )
  }


}

ReactDom.render(<App/>,document.getElementById('root'));
