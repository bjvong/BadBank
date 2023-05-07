function NavBar(loggedIn){
  console.log(loggedIn);
    return (
      loggedIn ? 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" data-toggle="tooltip" title="Create an new account Here!" href="#/CreateAccount/">Create Account</a>
        <a className="nav-link" data-toggle="tooltip" title="Login to your Bad Bank" href="#/login/">Log in</a>
        <a className="nav-link" data-toggle="tooltip" title="Log out of your account" href="/auth/logout">Log Out</a>
        <a className="nav-link" data-toggle="tooltip" title="Make a deposit to your account!" href="#/Deposit/">Deposit</a>
        <a className="nav-link" data-toggle="tooltip" title="Make a withdraw from your account!" href="#/Withdraw/">Withdraw</a>
        <a className="nav-link" data-toggle="tooltip" title="View all data" href="#/AllData/">AllData</a>
      </div>
    </div>
  </div>
</nav>
        </>
        :
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" data-toggle="tooltip" title="Create an new account Here!" href="#/CreateAccount/">Create Account</a>
        <a className="nav-link" data-toggle="tooltip" title="Login to your Bad Bank" href="#/Login/">Log in</a>
        <a className="nav-link" data-toggle="tooltip" title="Make a deposit to your account!" href="#/Deposit/">Deposit</a>
        <a className="nav-link" data-toggle="tooltip" title="Make a withdraw from your account!" href="#/Withdraw/">Withdraw</a>
        <a className="nav-link" data-toggle="tooltip" title="View all data" href="#/AllData/">AllData</a>
      </div>
    </div>
  </div>
</nav>
        </>
    );
}