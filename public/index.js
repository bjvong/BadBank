function Spa(){
super(props);

handleToUpdate = (someArg) => {
    alert('We pass argument from Child to Parent: ' + someArg);
}

 var handleToUpdate = this.handleToUpdate;
        

    return(
        <HashRouter>
            <NavBar loggedIn={loggedIn}/>
            <UserContext.Provider value={{users:[{name:'beau', email:'beau@gmail.com',password:'secret',balance:100.00}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/Login/" exact component={() => <Login loggedIn={setLoggedIn} />} />
                <Route path="/CreateAccount/" exact component= {() => <CreateAccount handleToUpdate={this.handleToUpdate} />} />
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