export const Student1 = (props) => {

    console.log(props);
    return(
        <div className="center">
            <p>First name: {props.stud.firstName}</p>
            <p>Last name: {props.stud.LastName}</p>
            <p>Email Address: {props.stud.email}</p>
        </div>
    )
}