import React, { Component } from 'react';
import axios from 'axios';

class DisplayJoke extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokes: []
         }
    }

   //Worksheet 2, Jokes
   componentDidMount(){
    this.getJokes();
    }

    //get jokes API async
    async getJokes(){
        let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=2')
        this.setState({
            jokes: response.data.jokes
        });
    }
    render() { 
        return (
            <div>
                {this.state.jokes.map(joke => {
                    return( 
                    <div>
                        <h1>{joke.setup}</h1><br/>
                        <h1>{joke.delivery}</h1><br/>
                    </div>)
                })}
            </div>
         );
    }
}
 
export default DisplayJoke;