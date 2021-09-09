import React from 'react';

 const DisplayJoke = (props) => {
     return (
            <div>
                {props.jokes.map(joke => {
                    return( 
                    <div>
                        <h1>{joke.setup}</h1><br/>
                        <h1>{joke.delivery}</h1><br/>
                    </div>)
                })}
            </div>
       );
 }
  

export default DisplayJoke;