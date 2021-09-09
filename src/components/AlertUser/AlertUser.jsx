import React from 'react';

const AlertUser = (props) => {
    return(
        <div>
            <button onClick = {props.alert}>Show Alert</button>
        </div>      
    );
}

export default AlertUser;