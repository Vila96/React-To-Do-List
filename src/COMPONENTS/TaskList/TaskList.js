import React, {Component} from 'react';
import Task from '../Task/Task';
import './TaskList.css';

////////////////////////////////////////// PROCESS DATA ////////////////////////////////////////////////////


class TaskList extends Component{

    print = () => {
        let list = undefined;
        if(this.props.dataList)
        {
            console.log(this.props);
            list = this.props.dataList.map(item => {
                return <Task 
                key = {item.id} 
                id = {item.id}
                text = {item.text} 
                callback = {this.deleteMe} />
            });
        }
        return list
    }
    deleteMe = (id) => {
        this.props.callback(id);
    }
    render() {
        return(
            <div id = "List">
                {this.print()}
            </div>
        );
    }
};

export default TaskList;
