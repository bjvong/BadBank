function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
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
        console.log(name,email,password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        const url = `/account/create/${name}/${email}/${password}`;
        ( async ()=>{
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);

        })();
        setStatus('Account Created Succesffully');
        setShow(false);
    }
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleChange(e,input){
        if(input === 'name'){
            setName(e.currentTarget.value);
        }
        if(input === 'email'){
            setEmail(e.currentTarget.value);
        }
        if(input === 'password'){
            setPassword(e.currentTarget.value);
        }
        if(name,email,password){
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
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} 
            onChange={(e) => handleChange(e,'name')}/><br/>
            Email Address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} 
            onChange={(e) => handleChange(e,'email')}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} 
            onChange={(e) => handleChange(e,'password')}/><br/>
            <button type="submit" className="btn btn-light" disabled={buttonMode} onClick={handleCreate}>Create Account</button>
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