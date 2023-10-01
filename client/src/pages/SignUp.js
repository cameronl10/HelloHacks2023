import React from 'react';
import './SignUp.css';

const SignUp = () => {

    const [state, setState] = React.useState({ email: "", password: "", confirm: "" });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);
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
            <img src={require('./images/logo.png')} />
                <h3>Cramly</h3>
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
                    <input id="login" type="submit" value="Sign Up" onChange={handleSubmit}/>
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