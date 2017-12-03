import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render (){
		return (
			<div>
			  <h1> hi this is first page </h1>
              <Hello/>
              <World/>
			</div>
		)
	}
}
 class Hello extends React.Component {
     render (){
         return (
             <div>
                 <h2> hi this is from second Component </h2>
                 </div>
         )
     }
 }

 class World extends React.Component {
     render(){
         return(
           <h3> hi from world component </h3>  
         )
     }
 } 

ReactDOM.render(<HelloWorld/>,document.getElementById('root'))
