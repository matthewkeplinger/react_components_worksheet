import React from 'react';

const NamesList = (props) => {
    return(
        <div>
            <ul>{props.names}</ul>
        </div>      
    );
}

export default NamesList;