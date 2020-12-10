import React from 'react'
import CharacterCard from './CharacterCard'
export default function CharacterList(props) {
    const {characters} = props;
    return (
        <div>
            {characters.map(character=> {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </div>
    )
}
