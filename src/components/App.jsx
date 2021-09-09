import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';

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

    addNewSuperhero(superhero){
        let tempSupers = this.state.superheroes
        tempSupers.push(superhero);
        this.setState({
            superheroes: tempSupers
        })
    }

    render() { 
        return ( 
            <div>
                <DisplayName firstName = {this.state.firstName} lastName = {this.state.lastName} />
                <NamesList names = {this.state.names} />
                <AlertUser alert = {this.showAlert} />
                <SuperheroTable superheroes = {this.state.superheroes} />
                <SuperheroCreateForm addNewSuperhero = {this.addNewSuperhero.bind(this)} superheroArray = {this.state.superheroes} />
            </div>
         )
    }
}
 
export default App;