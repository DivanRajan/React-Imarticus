import React from 'react';

const divstyle = {
    color:'red',
    FontFace:'bold',
    fontSize:50,
};
function Contact(){
    return(
        <div style={divstyle}>
            <h3>Contact Module</h3>
            <h5 style={{color:'blue',fontSize:30}}>Learn more</h5>
        </div>
    );
}


export default Contact;