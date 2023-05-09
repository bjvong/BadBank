function NavBar(props){
  return(
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        {props.left}
        <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="/">Bad Bank</a>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        {props.right}
      </div>
    </nav>
    </>
  );
}
function NavBarLeft(props){

  return (
    <>
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav me-auto">
            {props.body}
          </ul>
        </div>
      </>
  );
}

function NavBarRight(props){

  return (
      <>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ms-auto">
            {props.body}
          </ul>
        </div>
      </>
  );
}

function NavLink(props){
  function classes(){
    const extra = props.extra ? props.extra : '';
    return 'nav-link' + extra;
}
return(
  <>
  {props.name && props.title && props.href && (
    <li className="nav-item">
      <a className={classes()} data-toggle="tooltip" title={props.title} href={props.href}>{props.name}</a>
    </li>
  )}
  </>
)
}

function UsernameDisplay(props){
  function classes(){
    const extra = props.extra ? props.extra : '';
    return '' + extra;
  }
  return(
    <>
    <li className="nav-item align-middle">
    {props.name && (<div className="userDisplay"><span className="navbar-text text-white">Welcome, {props.name}.</span></div>)}
    </li>
    </>
  )
  }