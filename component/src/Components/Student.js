export const Student = (props) =>{
    console.log(props);
    return(
        <div className="center">
            <p>first name: {props.firstName}</p>
            <p>last name: {props.lastName}</p>
            <p>Email Address: {props.email}</p>
        </div>
    )
}