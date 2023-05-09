function Spa(){
    const [loggedIn, setLoggedIn] = React.useState('');
    const [nameDisplay, setNameDisplay] = React.useState('');
    const url = '/currentUser';
         ( async ()=>{
            await fetch(url).
            then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('We are not logged in');
            })
            .then((resJson) =>{
                setLoggedIn(true);
                const combineName = resJson.firstName + ' ' + resJson.lastName;
                setNameDisplay(combineName);
            })
            .catch((error) => {
                setLoggedIn(false);
                console.log(error);

            });

         })();
        
    return(
        
        <HashRouter>
            <NavBar 
                left={(
                <>
                  <NavBarLeft
                    body={loggedIn ? (
                      <>
                        <NavLink name="Deposit" href ="#/Deposit/" title ="Deposit to your Bad Bank Account"/>
                        <NavLink name="Withdraw" href ="#/Withdraw/" title ="Withdraw from your Bad Bank Account"/>
                      </>
                    ):(
                      <>
                        <NavLink name="Create Account" href="#/CreateAccount/" title="Create a new Bad Bank Account!"/>
                      </>  
                    )}
                  />
                </>
                )}
            
            right={(
                <>
                  <NavBarRight
                    body={loggedIn ? (
                      <>
                        <UsernameDisplay name= {nameDisplay} title= "Username"/>
                        <NavLink name="Log out?" href="/auth/logout" title="Log out of your Bad Bank Account"/>
                      </>
                    ):(
                      <>
                        <NavLink name="Log in" href="#/Login/" title="Log into your Bad Bank Account"/>
                      </>
                    )}
                  />
                </>
                )}
            />
            
                <Route path="/" exact component={Home} />
                <Route path="/login/" exact component={Login} />
                <Route path="/loginfail" exact component={Login} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
                <Route path="/deposit/" exact component={Deposit} />
                <Route path="/withdraw/" exact component={Withdraw} />

        </HashRouter>
    );
}


ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)