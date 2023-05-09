function Deposit(){

    const [username, setUsername] = React.useState('');
    const [context, setContext] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [depositAmount, setDepositAmount] = React.useState('');
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
    let preFormat = balance + Number(depositAmount);
    let newBalance = Math.floor(preFormat*100)/100;

    const url = `/updateBalance/${newBalance}`;
         ( async ()=>{
            var res = await fetch(url);
            var check = await res.json();

         })();
  
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

        body={context ? (
            <>
            <h5>Current Balance: ${balance}</h5><br/>
            <input type="text" className="form-control" id="desposit" placeholder="Enter Deposit Amount" value={depositAmount} 
            onChange={(e) => handleChange(e)}/><br/><br/>
            <div className="text-center">
            <button type="submit" style={{width:"165px"}} className="btn btn-light btn-block" disabled={buttonMode} onClick={makeDesposit}>Deposit</button>
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