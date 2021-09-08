import React, { Component } from 'react';
import DisplayName from './DisplayName';
import NamesList from './NamesList';
import AlertUser from './AlertUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        //Exercise 1
            firstName: 'Reggie',
            lastName: 'White',
        
        //Exercise 2 
            names: ['Mike ', 'Nevin ', 'Aaron ', 'Tory ', 'Kelly '],

        //Exercise 3
            superheroes : [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        };
    }

    showAlert = () => {
        alert('devCodeCamp')
    }


    render() { 
        return ( 
            <div>
                <DisplayName firstName = {this.state.firstName} lastName = {this.state.lastName} />
                <NamesList names = {this.state.names} />
                <AlertUser alert = {this.showAlert} />
            </div>
         )
    }
}
 
export default App;