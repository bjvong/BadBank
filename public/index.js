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

            });

         })();
        
    return(
        <HashRouter>
            <NavBar 
            body={loggedIn ? (<>
            <NavLink 
            name = "Log out"
            href = "/auth/logout"
            title = "Log out of your Bad Bank Account"
            />
            <NavLink 
            name = "Deposit"
            href = "#/Deposit/"
            title = "Deposit to your Bad Bank Account"
            />
            <NavLink 
            name = "Withdraw"
            href = "#/Withdraw/"
            title = "Withdraw from your Bad Bank Account"
            />
            <UsernameDisplay
            name = {nameDisplay}
            href = "/auth/logout"
            title = "Log out of Bad Bank"
            />
            </>):(<>
                <NavLink 
            name = "Create Account"
            href = "#/CreateAccount/"
            title = "Create a new Bad Bank Account!"
            />
            <NavLink 
            name = "Log in"
            href = "#/Login/"
            title = "Log into your Bad Bank Account"
            />
            </>)}
            />
            <UserContext.Provider value={{users:[{name:'beau', email:'beau@gmail.com',password:'secret',balance:100.00}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/login/" exact component={Login} />
                <Route path="/loginfail" exact component={Login} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
                <Route path="/deposit/" exact component={Deposit} />
                <Route path="/withdraw/" exact component={Withdraw} />
            </UserContext.Provider>
        </HashRouter>
    );
}


ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)