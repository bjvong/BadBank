function Spa(){
const [loggedIn, setLoggedIn] = React.useState(false);

function handleGoogleLogin(){
    setLoggedIn(true);
}
        

    return(
        <HashRouter>
            <NavBar loggedIn={loggedIn}/>
            <UserContext.Provider value={{users:[{name:'beau', email:'beau@gmail.com',password:'secret',balance:100.00}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/Login/" exact component={() => <Login loggedIn={setLoggedIn} />} />
                <Route path="/CreateAccount/" exact component= {() => <CreateAccount onGoogleLogin={handleGoogleLogin} loggedIn={setLoggedIn} />} />
                <Route path="/deposit/" exact component={Deposit} />
                <Route path="/withdraw/" exact component={Withdraw} />
                <Route path="/alldata/" exact component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}


ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)