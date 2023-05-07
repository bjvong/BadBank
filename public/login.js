function Login(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [buttonMode, setButtonMode] = React.useState(true);
 
    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label + ' must be filled out!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (field == password && field.length < 8 ){
            setStatus('Error: ' + label + ' must be 8 or more characters!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    
    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleChange(e,input){
        if(input === 'email'){
            setEmail(e.currentTarget.value);
        }
        if(input === 'password'){
            setPassword(e.currentTarget.value);
        }
        if(email,password){
            setButtonMode(false);
        } else setButtonMode(true);
        }

    return (
        <Card
        bgcolor="primary"
        header="Welcome Back!"
        status={status}
        body={show ? (
            <>
            <form className="auth-container text-left" action="/auth/local/signin" method="POST">
            Email<br/>
            <input type="email" className="form-control" id="email" name="username" aria-describedby="emailHelp" placeholder="Enter email" value={email} 
            onChange={(e) => handleChange(e,'email')} required/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={password} 
            onChange={(e) => handleChange(e,'password')} required/><br/>
            <button disabled={buttonMode} className="btn btn-primary btn-block my-2" type="submit">
            Sign In
            </button>
            </form>
            <form className="text-center" action="/auth/google" method="get">
            <button className="btn btn-primary btn-block my-2" type="submit">
            Sign-in with Google
            </button>
            </form>
            </>
        ):(
            <>
            <h5>You are logged in.</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
        )}
        />
    );
}