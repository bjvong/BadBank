function NavBar(){
    return (
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
        <a className="nav-link" data-toggle="tooltip" title="Make a deposit to your account!" href="#/deposit/">Deposit</a>
        <a className="nav-link" data-toggle="tooltip" title="Make a withdraw from your account!" href="#/withdraw/">Withdraw</a>
        <a className="nav-link" data-toggle="tooltip" title="View all data" href="#/alldata/">AllData</a>
      </div>
    </div>
  </div>
</nav>
        </>
    );
}