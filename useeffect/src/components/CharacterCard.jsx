import React from 'react'

export default function CharacterCard(props) {
    const {character, name, image, origin, gender, species} = props;
    return (
        <div>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            
        </div>
    )
}
