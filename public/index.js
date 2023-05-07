function Spa(){
    const url = '/currentUser';
    ( async ()=>{
       var res = await fetch(url);
       var data = await res.json();
       console.log(data);

    })();
        
    return(
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'beau', email:'beau@gmail.com',password:'secret',balance:100.00}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
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