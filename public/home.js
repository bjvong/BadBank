function Home(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [failure, setFailure] = React.useState(urlParams.get('v'));
    const [status, setStatus] = React.useState();
    console.log(failure);
    const [fixer, setFixer] = React.useState(true);

    if(failure === "failed"){
    setFixer(false);
    setStatus('Login Failed, please try again');
    setFailure("back");
    
    } 

    return (
        <>
        <Dynamic
        body ={fixer ?(<Card
            txtcolor="black"
            header="BadBank Web Portal"
            title="Welcome to the Bank"
            text="The Best Bad Bank in the Land."
            align="center"
            body={(<img src="img/bank.png" align="center" className="img-fluid" width="50%" alt="Responsive image" />)}
        />):(<Login message="Failed to Log in."/>)}
        
        />
        </>
    );
}