function AllData(){
  //  const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
  //  const { users } = React.useContext(UserContext);
  const [users, setUsers] = React.useState(''); 

 //   const listUsers = users.map(Listing);

//function Listing(users, i){
React.useEffect(() =>{
    fetch('/account/all')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            setUsers(JSON.stringify(users));
        });
}, []);


/*const listUsers = users.map((users,i) => {
    return (
        <tr key={i}>
        <td key={i+'name'}>
            {users.name}
            </td>
        <td key={i+'email'}>
            {users.email}
            </td>
        <td key={i+'password'}>
            {users.password}
            </td>
        <td key={i+'balance'}>
            ${users.balance}
        </td>
        </tr>
        
    );
});

*/


    
    
    return (

        <>
        <h5>All Data</h5>
        {users}

        </>

  /*
        <Card
        bgcolor="secondary"
        header="Users"
        status={status}

        body={!ctx.users[0]  ? (
            <>
            <h5>Create an Account first!</h5>
            </>
        ):(
            
             <>
           <table className="table table-bordered table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Email</th>
                <th scope="col">Name<br/></th>
                <th scope="col">Password<br/></th>
                <th scope="col">Balance<br/></th>
                </tr>
            </thead>
            <tbody>
            {users}
            </tbody>
            </table>
      
            </>
        )}
        />
*/
    );
}