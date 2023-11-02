function Example1(){
    //const isLoggedIn = this.state.isLoggedIn;
    const isLoggedIn = false;
    return(
        <div><h1>
            Welcome {isLoggedIn ?'Back':'Please Login first'}
            </h1>
        </div>
    )
}
export default Example1