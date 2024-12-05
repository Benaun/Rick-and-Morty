import { Link } from "react-router-dom";
import { Character } from "../model/character/interfaces";

export default function CharacterCard({ character }: { character: Character }) {

  const characterLink = String(character?.id)

  if (!character) return

  return (
    <div>
      <Link to={`/products/${characterLink}`}>
        <img
          src={character.image}
          alt={character.name}
        />
        <h3>{character.name}</h3>
      </Link>
    </div>
  )
}