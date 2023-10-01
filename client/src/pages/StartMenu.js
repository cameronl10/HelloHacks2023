import React from 'react';
import './StartMenu.css';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
const StartMenu = () => {
    const navigate = useNavigate();
    const [dbData,setdbData] = useState([{}])
    const [usernameData,setUsernameData] = useState([])
    useEffect(() =>{
        fetch("http://localhost:3001/users" , {method: "GET"}).then(
            response => response.json()
        ).then(
            data => {
                setdbData(data);
                setUsernameData(data.map(entry => entry.email));
                console.log(usernameData);
            }
        )
    }, [])



    const [state, setState] = useState({ email: "", password: "" });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(usernameData);
       {
        (usernameData.includes(state.email)) ? navigate('/Dashboard',{state: {email:state.email, name: "Cameron"}}) : alert("user does not exists");
       }
    };
    const handleChange = e => {
        setState({
        ...state,
        [e.target.name]: e.target.value
        });
    };



    return(
    <div className = "login">
        
        <div className = "centerbox">
         <div className = "contentbox">


            <div className = "headerbox">
                <img src={require('./images/logo.png')} alt='logo'/>
                <h2>Login to Cramly</h2>
            </div>

            <div className = "userInput">
                <form onSubmit={handleSubmit}>
                    <p className='subtitle'>EMAIL</p>
                    <input type="text" name="email" onChange={handleChange}/>
                    <p className='subtitle'>PASSWORD</p>
                    <input type="password" name="password" onChange={handleChange}/>
                    <input id="login" type="submit" value="Log In" onChange={handleSubmit}/>
                </form>
            </div>

            <div className = "footer">
                <h4 id='pwd'>Don't have an account?</h4><h4 id='signup'><a href='./signup'>Sign up</a></h4>
            </div>
            </div>
        </div>
    </div>
    );
}

export default StartMenu;