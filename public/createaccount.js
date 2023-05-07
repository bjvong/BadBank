function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
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

     function handleCreate(){
         console.log(firstName,lastName,email,password);
         if (!validate(firstName, 'firstName')) return;
         if (!validate(lastName, 'lastName')) return;
         if (!validate(email, 'email')) return;
         if (!validate(password, 'password')) return;

         const url = `/auth/local/signup/${firstName}/${lastName}/${email}/${password}`;
         ( async ()=>{
            var res = await fetch(url);
            var user = await res.json();
            res.send(user);

         })();
         setStatus('Account Created Successfully');
         setShow(false);
     }
    
    function clearForm(){
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleChange(e,input){
        if(input === 'firstName'){
            setFirstName(e.currentTarget.value);
        }
        if(input === 'lastName'){
            setLastName(e.currentTarget.value);
        }
        if(input === 'email'){
            setEmail(e.currentTarget.value);
        }
        if(input === 'password'){
            setPassword(e.currentTarget.value);
        }
        if(firstName,lastName,email,password){
            setButtonMode(false);
        } else setButtonMode(true);
        }

    return (

        <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
            <>
            {/* <form className="auth-container text-center"action="/auth/local/signup"method="post"> */}
            First Name<br/>
            <input name="first_name" type="text" aria-label="First name" className="form-control" id="firstName" placeholder="Enter First name" value={firstName} 
            onChange={(e) => handleChange(e,'firstName')} required/><br/>
            Last Name<br/>
            <input name="last_name" type="text" aria-label="Last name" className="form-control" id="lastName" placeholder="Enter Last name" value={lastName} 
            onChange={(e) => handleChange(e,'lastName')} required/><br/>
            Email Address<br/>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} 
            onChange={(e) => handleChange(e,'email')} required/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={password} 
            onChange={(e) => handleChange(e,'password')} required/><br/>
            <button type="submit" className="btn btn-light" disabled={buttonMode} onClick={handleCreate}>Create Account</button>
            {/* </form> */}
            <form className="text-center" action="/auth/google" method="get">
            <button className="btn btn-primary btn-block my-2" type="submit">
            Sign-in with Google
            </button>
            </form>

            </>
        ):(
            <>
            <Redirect to ='/Login/'/>
            </>
        )}
        />
    );
}