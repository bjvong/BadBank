function Spa(){
 const [loggedIn, setLoggedIn] = useState(false);
 const SecuredRoute = ({ ...props }) => (
        console.log(props.path),
        <Route path={props.path} render={(data) => (
          console.log(data),
          localStorage.getItem('accessToken')
            ? <props.render {...data} />
            : <Redirect to='/login' />
        )} />
      )
        

    return(
        <HashRouter>
            <NavBar loggedIn={loggedIn}/>
            <UserContext.Provider value={{users:[{name:'beau', email:'beau@gmail.com',password:'secret',balance:100.00}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/Login/" exact component={() => <Login setLoggedIn={setLoggedIn} />} />
                <Route path="/CreateAccount/" exact component={CreateAccount} />
                <SecuredRoute path="/deposit/" exact component={Deposit} />
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