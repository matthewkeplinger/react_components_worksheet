import React from 'react';

const DisplayJoke = (props) => {
    return (
        <div>
            <br/>
            <h1>Joke: {props.setup} </h1><br/><h1> Punchline: {props.delivery} </h1>
        </div>
        
      )
}
 
export default DisplayJoke;