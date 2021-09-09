import React, { Component } from 'react';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const superhero = {
            superheroId: this.props.superheroArray.length + 1,
            name: this.state.superheroName,
            primaryAbility: this.state.superheroPrimaryAbility,
            secondaryAbility: this.state.superheroSecondaryAbility
        }
        this.props.addNewSuperhero(superhero);
        this.setState({
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        });
    }

    render() { 
        return (
            <div>
                <h2>Create a New Superhero</h2>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                            <tr>
                                <td>Superhero Name: </td><td><input type = "text" name = "superheroName" value={this.state.superheroName} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Primary Ability: </td><td><input type = "text" name = "superheroPrimaryAbility" value={this.state.superheroPrimaryAbility} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Superhero Name: </td><td><input type = "text" name = "superheroSecondaryAbility" value={this.state.superheroSecondaryAbility} onChange= {this.handleChange}/></td>
                            </tr>                
                    </table>
                    <input type = "submit" value = "Add hero"/>
                </form>
            </div>
         )
    }
}
 
export default SuperheroCreateForm;