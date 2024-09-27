import React from "react";
function Clock(props){
    return(
        <div style={{border: '1px solid black', 
                     background: 'black', 
                     color: 'white',
                     height: '100vh',
                     paddingTop: '360px',                                         
                     textAlign: 'center'}}>
            <h1>hello, react</h1>
            <h2 style={{fontSize: '30px'}}>This time</h2>
            <h2 style={{fontSize: '40px'}}>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;