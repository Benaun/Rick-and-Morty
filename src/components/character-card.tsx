import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";

export default function CharacterCard({ characterId }: { characterId: number }) {

  const character = useAppSelector((state) => state.characters.characters.find(el => el.id === characterId))
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