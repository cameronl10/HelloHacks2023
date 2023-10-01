import React from 'react';
import './SignUp.css';
import {useState} from 'react';
const SignUp = () => {

    const [state, setState] = useState({ email: "", password: "", confirm: "" });

    const handleClick = e => {
        e.preventDefault();
        const data ={
            "name": state.email,
            "email": state.email
        }
        fetch("http://localhost:3001/users", {method: 'POST' ,
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response => response.text()))
    .then((responseText) => {
        console.log(responseText);
    });
    };

    const handleChange = e => {
        setState({
        ...state,
        [e.target.name]: e.target.value
        });
    };

    return(
    <div className = "sign-up-box">
        
        <div className = "centerbox">
         <div className = "contentbox">


            <div className = "headerbox">
            <img src={require('./images/logo.png')} alt='logo' />
                <h2>Sign Up</h2>
            </div>

            <div className = "userInput">
                <form>
                    <p className='subtitle'>EMAIL</p>
                    <input type="text" name="email" onChange={handleChange}/>
                    <p className='subtitle'>PASSWORD</p>
                    <input type="password" name="password" onChange={handleChange}/>
                    <p className='subtitle'>CONFIRM PASSWORD</p>
                    <input type="password" name="confirm" onChange={handleChange}/>
                    <input id="login" type="submit" value="Sign Up" onClick={handleClick}/>
                </form>
            </div>

            <div className = "footer">
                <h4 id='pwd'>Already an user?</h4><h4 id='signup'><a href='./'>Login</a></h4>
            </div>
            </div>
        </div>
    </div>
    );
}

export default SignUp;