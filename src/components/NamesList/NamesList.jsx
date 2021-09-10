import React from 'react';

const NamesList = (props) => {
    return(
        <div>
            <ul>{props.names.map(function(name, index){
                return <li key={index}>{name}</li>
            })}
            </ul>
        </div>      
    );
}

export default NamesList;