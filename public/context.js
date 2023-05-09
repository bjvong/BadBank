const Route = ReactRouterDOM.Route;
const Redirect = ReactRouterDOM.Redirect;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);



function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card border-dark mb-3 ' + bg + txt;
    }
    const align = props.align ? props.align : '';

    return (
        <div className="mainDiv">
        <div className={classes()} style={{maxWidth: "32rem"}}>
            <div className="card-header bg-dark text-white">{props.header}</div>
            <div className="card-body" align={align}>
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
        </div>
    );
}

function Dynamic(props){
return(
<>{props.body}</>
);

}



