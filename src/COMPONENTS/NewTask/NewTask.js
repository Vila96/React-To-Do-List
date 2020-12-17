import React, { Component } from 'react';
import './NewTask.css' ;


class NewTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            strike: "",
            checked: false,
            editMode: false
        }
        
    }


    onClickChangeEditMode = () => {
        console.log("Editando")
        this.setState({
            editMode: !this.state.editMode
        })
      }

    render(){
        return this.state.editMode ?
        (<div>

                <input
                    type = "text"
                    name = "edit"
                    id = "edit"
                    placeholder = "Name of new task"
                    ref = {(input) => this.addTask = input}>
                </input>
                {/*Cancel Btn*/}
                <button
                    class = "cancelChangeBtn"
                    onClick = {this.onClickChangeEditMode}>Cancel</button>
                {/*Add Task Btn*/}
                <button
                    class= "acceptChangeBtn"
                    onClick = {(e) => {this.newTask(e)}}>Save</button>
            </div>
        ):
        (<div>
            <button 
            id = "createNewTask"
            onClick = {this.onClickChangeEditMode}>Create New Task</button>
        </div>)
    }

}


export default NewTask;