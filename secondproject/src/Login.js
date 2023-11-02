import React from 'react';

class Login extends React.Component{
    render(){
        const ans = event => alert (event.target.id);
        return(
            <div className='App'><h1>
                Username: <input type="text" name="text"/><br/>
                Password: <input type="password" name="pass"/><br/>
                <button id="Success" onClick={ans}>
                    Click Here
                </button>
                </h1>
            </div>
        )
    }
}
export default Login;