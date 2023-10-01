import react from 'react';
import './SignUp.css';

const StartMenu = () =>{
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
                    <input type="text"/>
                    <p className='subtitle'>PASSWORD</p>
                    <input type="password"/>
                    <p className='subtitle'>CONFIRM PASSWORD</p>
                    <input type="password"/>
                </form>

                <button id="login">Sign Up</button>
            </div>

            <div className = "footer">
                <h4 id='pwd'>Already an user?</h4><h4 id='signup'><a href='./'>Login</a></h4>
            </div>
            </div>
        </div>
    </div>
    );
}

export default StartMenu;