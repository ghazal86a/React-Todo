import React from 'react';

class AddTodo extends React.Component {
    state = {
        id:null, 
        content:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }

    handleChange = (e) => {
        this.setState({
            id : Math.random(),
            content: e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new Todo</label>
                    <input type="text" name="todo" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo