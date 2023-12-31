import { useState, useEffect } from 'react';

function OnlineComponent(){
    //online state
    const [isOnline,setIsOnline] =useState(navigator.onLine);

    useEffect(()=>{
        //update network status
        const handleStatusChange =() => {
            setIsOnline(navigator.onLine);
        };

        //Listen to the online status
        window.addEventListener('online',handleStatusChange);

        //listen to the offline status
        window.addEventListener('offline',handleStatusChange);
        //specify how to clean up after this effect for performance improvement

        return()=>{
            window.removeEventListener('online',handleStatusChange);
            window.removeEventListener('offline',handleStatusChange);
        };
    },[isOnline]);
    return(
        <div className='container'>
            <h3>Welcome to Imarticus.com</h3>
            <p>Turn on/off your wi-fi to see what happens</p>
            {isOnline?(
                <h1 className='online'>You Are Online</h1>
            ):(
                <h1 className='offline'>You Are Offline</h1>
            )}
        </div>
    );
}

export default OnlineComponent;