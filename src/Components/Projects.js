import {Component} from 'react';

export class Projects extends Component{
    constructor(props){
            super(props);
            this.state ={
                age : 24
            };
            
    }
    componentDidMount(){
        console.log('Component Mounted');
    }
    componentDidUpdate(){
        console.log('Component Updated');
    }
     componentWillUnmount(){
        console.log('Component Unmounted');
    }
    handleAge(){
        this.setState({
            age : this.state.age+1
         
    })};
    render(){
        return (<div>
            <h1>Hello I am {this.props.person} Class Component</h1>
        <form>
            <label>Username</label>
            <p>{this.state.age}</p>
            <p>{this.props.school}</p>
        </form>
        <button onClick={()=>{this.handleAge()}}>Increment Age</button>
        </div>)
    }
}

Projects.defaultProps = {
    school : 'StJude'
}
