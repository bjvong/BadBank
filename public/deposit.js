function Deposit(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [depositAmount, setDepositAmount] = React.useState('');
    const [balance, setBalance] = React.useState(Number(ctx.users[ctx.users.length - 1].balance));
    const [buttonMode, setButtonMode] = React.useState(true);

function validate(field){
        if (!field){
            setStatus(alert('Deposit must be filled'));
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (isNaN(field)){
            setStatus('Error: Deposit must be a number!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (field < 0){
            setStatus('Error: Cannot Deposit Negative Funds!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

function makeDesposit (){
    if (!validate(depositAmount)) return;
    let newBalance = balance + Number(depositAmount);
    ctx.users[ctx.users.length - 1].balance = newBalance;
    setBalance(newBalance);
    setStatus('Deposit Successful');
    setDepositAmount('');
    setButtonMode(true);
    
}

function handleChange(e){
setDepositAmount(e.currentTarget.value);
    if (Number(e.currentTarget.value) <= 0){
    setButtonMode(true);
    } else setButtonMode(false);
}


    return (
        <Card
        bgcolor="success"
        header="Deposit"
        status={status}

        body={!ctx.users[0]  ? (
            <>
            <h5>Create Account to Make a Deposit</h5>
            </>
        ):(
            <>
            <h5>Current Balance: ${balance}</h5><br/>
            <input type="text" className="form-control" id="desposit" placeholder="Enter Deposit Amount" value={depositAmount} 
            onChange={(e) => handleChange(e)}/><br/>
            <button type="submit" className="btn btn-light" disabled={buttonMode} onClick={makeDesposit}>Deposit</button>
            
            </>
        )}
        />
    );
}