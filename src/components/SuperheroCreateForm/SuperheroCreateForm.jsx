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
        this.props.addNewSuperhero(this.state)
    }

    render() { 
        return (
            <div>
                <h2>Create a New Superhero</h2>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                            <tr>
                                <td>Superhero Name: </td><td><input type = "text" name = "name" value={this.state.name} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Primary Ability: </td><td><input type = "text" name = "primaryAbility" value={this.state.primaryAbility} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Superhero Name: </td><td><input type = "text" name = "secondaryAbility" value={this.state.secondaryAbility} onChange= {this.handleChange}/></td>
                            </tr>                
                    </table>
                    <input type = "submit" value = "Add hero"/>
                </form>
            </div>
         )
    }
}
 
export default SuperheroCreateForm;