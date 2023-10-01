import React from 'react';
import TaskbarItem from './components/TaskbarItem'
import './Dashboard.css';

const SignUp = () => {
    return(
    <div className = "dashboard">
        <div className='taskbar'>
            <div className = "contentbox">
                <div className='top-task'>
                    <a href='/dashboard'><img src={require('./images/menu.png')} alt='menu'/></a>
                </div>
                <div className='bottom-task'>
                <TaskbarItem
                    name="Dashboard"
                    img=""
                    link=""
                />
                <TaskbarItem
                    name="Statistics"
                    img=""
                    link=""
                />
                <TaskbarItem
                    name="Friends"
                    img=""
                    link=""
                />
                <TaskbarItem
                    name="Blocked Sites"
                    img=""
                    link=""
                />
                </div>
            </div>
        </div>
        <div className='display-board'>
            <div className='navbar'>

            </div>
            <div className='content'>

            </div>
        </div>
    </div>
    );
}

export default SignUp;