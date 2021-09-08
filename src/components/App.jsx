import React, { Component } from 'react';
import DisplayName from './DisplayName';
import NamesList from './NamesList';
import AlertUser from './AlertUser';
import SuperheroTable from './SuperheroTable';

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
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
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
                <SuperheroTable superheroes = {this.state.superheroes} />
            </div>
         )
    }
}
 
export default App;