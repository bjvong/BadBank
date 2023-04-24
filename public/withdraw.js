function Withdraw(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
    const [balance, setBalance] = React.useState(Number(ctx.users[ctx.users.length - 1].balance));
    const [buttonMode, setButtonMode] = React.useState(true);

function validate(field){
        if (!field){
            setStatus(alert('Withdraw must be filled out'));
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (isNaN(field)){
            setStatus('Error: Withdraw must be a number!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (field > balance){
            setStatus('Error: Insufficient Funds!');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

function makeWithdraw (){
    if (!validate(withdrawAmount)) return;
    let newBalance = balance - Number(withdrawAmount);
    ctx.users[ctx.users.length - 1].balance = newBalance;
    setBalance(newBalance);
    setStatus('Withdraw Successful');
    setWithdrawAmount('');
    setButtonMode(true);
}


function handleChange(e){
    setWithdrawAmount(e.currentTarget.value);
    if (Number(e.currentTarget.value) <= 0){
    setButtonMode(true);
    } else setButtonMode(false);  
}


    return (
        <Card
        bgcolor="info"
        header="Withdraw"
        status={status}

        body={!ctx.users[0]  ? (
            <>
            <h5>Create Account to Make a Withdraw</h5>
            </>
        ):(
            <>
            <h5>Current Balance: ${balance}</h5><br/>
            <input type="text" className="form-control" id="withdraw" placeholder="Enter Withdraw Amount" value={withdrawAmount} 
            onChange={(e) => handleChange(e)}/><br/>
            <button type="submit" className="btn btn-light" disabled={buttonMode} onClick={makeWithdraw}>Withdraw</button>
            
            </>
        )}
        />
    );
}