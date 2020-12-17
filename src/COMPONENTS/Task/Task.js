import React, { Component } from 'react';
import './Task.css' ;

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            strike: "",
            checked: false,
            editMode: false
        }
    }

    componentDidMount(){
    }

   
    onClickCheckbox = () => {
        this.setState({ strike : this.state.strike === "" ? "strike" : "",
                        checked : !this.state.checked}, () => console.log("Llamada a setState del Item",this.props.id,this.state.checked));
    }

    onClickDeleteButton = () => {
        this.props.callback(this.props.id);
    }

    onClickChangeEditMode = () => {
        console.log("Editando")
        this.setState({
            editMode: !this.state.editMode
        })
      }

    
    saveEdit = (id) => {

    }

    render() {
        if (this.props.id === 2)
            console.log("Soy el 2",this.state.checked);



        return  this.state.editMode ? (
            <div>
                    <input
                        type = "text"
                        name = "edit"
                        id = "edit"
                        defaultValue = {this.state.text}>
                  </input>

                  <button
                  class = "cancelChangeBtn"
                  onClick = {this.onClickChangeEditMode}>X</button>

                  <button
                  class= "acceptChangeBtn"
                  onClick = {this.editMode = false}>✓</button>
            </div>):

            (<div id = "itemContainer">
                {/*Checkbox */}
                <input  type = "checkbox"
                        id = {this.props.id}
                        onClick = {this.onClickCheckbox}
                        name = {this.props.id}
                        value = {this.props.text}
                        checked = {this.state.checked}></input>
                        
                {/*Data*/}           
                <p  className = {this.state.strike}
                    onClick = {this.onClickCheckbox}>{this.props.text}</p>

                {/*Delete Btn */}
                <button type = "button"
                        id = "deleteButton"
                        onClick = {this.onClickDeleteButton}>Delete</button>
                        
                {/*Edit Btn */}
                <button type = "button"
                        id = "editButton"
                        onClick = { this.onClickChangeEditMode}>Edit</button>
                
            </div>);

    }
};

export default Task;