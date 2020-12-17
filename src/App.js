
import Finder from './COMPONENTS/Finder/Finder';
import TaskList from './COMPONENTS/TaskList/TaskList';
import NewTask from './COMPONENTS/NewTask/NewTask';

import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.dataList = [
      {id : 1, text: "Make lunch"},
      {id : 2, text: "Clean kitchen"},
      {id : 3, text: "Clean bathrrom"},
      {id : 4, text: "Broom the floor"},
      {id : 5, text: "Do the laundry"},
    ];
    this.state = {
      data : this.dataList
    };
  }
  componentDidMount(){
  }

  callMeBack = (e) => {
    let regEx = new RegExp(`^${e.target.value}.*$`, "i");
    this.setState({data : this.dataList.filter(element => {return regEx.test(element.text)})});
  }

  deleteFromList = (id) => {
    console.log("Delete Task ", id);
    this.dataList = this.dataList.filter(el => {return el.id !== id});
    this.setState({data : this.dataList});
  }

  /*addToList = (id) => {
    id = this.dataList.length + 1
    console.log("Add Task", id);
    this.dataList = this.dataList.filter(el => {return el.id !== id});
    this.setState({data : this.dataList});
  }*/

  addTask(e) {
    e.preventDefault();
    const newTask = this.newTask.value;
    this.setState = ({
        data: [...this.state.data, newTask]
    })
}


  render() {
    return(
      <header className = "App-header">
        <div id= "ListContainer">
          <Finder callback = {this.callMeBack} />
          <TaskList dataList = {this.state.data} callback = {this.deleteFromList}/>
          <NewTask dataList = {this.state.data} callback = {this.addTask}/>
        </div>
    </header>
    )
  }
};

export default App;


 
