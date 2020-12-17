import React, { Component } from 'react';
import './Finder.css' ;

class Finder extends Component {
    
        componentDidMount(){
        }
    
        render() {
            return(
            <div id = "finderContainer">
                <h1>To Do List</h1>
                <input  type = "text"
                        name = "finder"
                        id = "finder"
                        placeholder = "Search for task in the list..."
                        onChange = {this.props.callback} />
            </div>);
        }
};
export default Finder;