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
	render (){
		return (
			<div>
			<Hello/>
			<Worlds/>
			</div>
		)
	}
}

class Hello extends React.Component{
	render(){
		return (
				<h2> Hello from hello </h2>
				)
	}
}

class Worlds extends React.Component{
	render(){
		return (
				<h3> Hello form Worlds </h3>
				)
	}
}




ReactDOM.render(<HelloWorld/>,document.getElementById('root'))