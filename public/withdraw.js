function Withdraw(){
    const [username, setUsername] = React.useState('');
    const [context, setContext] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [buttonMode, setButtonMode] = React.useState(true);
    
    ( async ()=>{
        await fetch('/currentUser').
        then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('We are not logged in');
        })
        .then((resJson) =>{
            setUsername(resJson.email);
            setBalance(resJson.balance);
        })
        .catch((error) => {
            setContext(false);
            console.log(error);
        });
     })();

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
    let preFormat = balance + Number(withdrawAmount);
    let newBalance = Math.floor(preFormat*100)/100;

    const url = `/updateBalance/${newBalance}`;
         ( async ()=>{
            var res = await fetch(url);
            var check = await res.json();

         })();

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

        body={context ? (
            <>
            <h5>Current Balance: ${balance}</h5><br/>
            <input type="text" className="form-control" id="withdraw" placeholder="Enter Withdraw Amount" value={withdrawAmount} 
            onChange={(e) => handleChange(e)}/><br/><br/>
            <div className="text-center">
            <button type="submit" style={{width:"165px"}} className="btn btn-light btn-block" disabled={buttonMode} onClick={makeWithdraw}>Withdraw</button>
            </div>
            <br/>
            </>
        ):(
            <>
            <Redirect to ='/'/>
            </>
        )}
        />
    );
}