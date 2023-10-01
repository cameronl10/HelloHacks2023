import react from 'react';
import './StartMenu.css';

const StartMenu = () =>{
    return(
    



    <div className = "login">
        
        <div className = "centerbox">
         <div className = "contentbox">


            <div className = "headerbox">
                <img src={require('./images/logo.png')} />
                <h3>Cramly</h3>
                <h2>Login to Cramly</h2>
            </div>

            <div className = "userInput">
                <form>
                    <p className='subtitle'>EMAIL</p>
                    <input type="text"/>
                    <p className='subtitle'>PASSWORD</p>
                    <input type="password"/>
                </form>

                <button id="login">Login</button>
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