import React,{Component} from 'react'
import ReactDOM from  'react-dom'

class App extends Component {
	constructor(props){
		super(props);
      console.log("from constructor");
	}
    componentWillMount(){
		console.log('from conponent will mount');
	}
	componentDidMount(){
		console.log('from component did mount');
	}
	render(){
		console.log('from render function..')
		return(
			<h1> Hi from component itself </h1>
		)
	}

}
ReactDOM.render(<App/>, document.getElementById('root'));