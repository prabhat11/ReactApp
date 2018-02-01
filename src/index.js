    import  React, {Component} from 'react';
    import ReactDom  from 'react-dom';

   class App extends Component{
       constructor(props){
           super()
           this.setState ={
               content:[]
           }
       }

       componewillmount(){
           $.ajax({
               
           })
       }
      render(){
             return(
            <section>
                <h1> Hello Prabhat !</h1> 
                {React.Children.only(this.props.children)}
             </section>
    )}
    }
    ReactDom.render(<App>
        <div>
           <h1> This is firs child!  </h1>
           <h2> This is second child </h2>
        </div>
         </App>,document.getElementById('root') )
