function NavBar(props){

  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="/">BadBank</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {props.body}
    </div>
  </div>
</div>
</nav>
      </>
  );
}

function NavLink(props){
return(
  <>
  {props.name && props.title && props.href &&(<a className="nav-link" data-toggle="tooltip" title={props.title} href={props.href}>{props.name}</a>)}
  </>
)
}