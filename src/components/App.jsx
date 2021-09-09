import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';
import DisplayJoke from './DisplayJoke/DisplayJoke';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        //Worksheet 1, Exercise 1
            firstName: 'Reggie',
            lastName: 'White',
        
        //Worksheet 1, Exercise 2 
            names: ['Mike ', 'Nevin ', 'Aaron ', 'Tory ', 'Kelly '],

        //Worksheet 1, Exercise 3
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
            ],
        };
    }

 
    //alert for Worksheet 1, Exercise 3
    showAlert = () => {
        alert('devCodeCamp')
    }

    //Worksheet 2, Exercise 1
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
                <DisplayJoke joke={this.state.jokes}/>
            </div>
         )
    }
}
 
export default App;