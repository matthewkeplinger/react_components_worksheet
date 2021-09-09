import React from 'react';
import './SuperheroTable.css';


const SuperheroTable = (props) => {
    return(
        <table>
                <tr>
                    <th>Name: </th>
                    <th>Primary Ability: </th>
                    <th>Secondary Ability: </th>
                </tr>
                {props.superheroes.map(superhero => (
                    <tr>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondaryAbility}</td>
                    </tr>
                ))}
        </table>    
    );
}

export default SuperheroTable;