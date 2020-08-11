import React, { Component } from 'react';
import ContextProfile from './ContextProfile';

class ContextApp extends Component {

    render() {
        return (
            <div>
                <h1>Welcome To My App</h1>
                <ContextProfile profile={this.state}/>
            </div>
        )
    }
}

export default ContextApp;
