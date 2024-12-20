import { Link } from "react-router-dom";
import { memo, useCallback } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { Character } from "../model/character/interfaces";
import { useAppDispatch } from "../store/store";
import { deleteCharacted, setInFavorite } from "../model/character/characte.slice";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "./ui/card"
import { Button } from "./ui/button";

function CharacterCard({ character }: { character: Character }) {
  const dispatch = useAppDispatch()
  const id = String(character?.id)

  const handleToggleFavorite = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    dispatch(setInFavorite({ id: character.id }))
  }, [id])

  const handleDeleteCharacter = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    dispatch(deleteCharacted({ id: character.id }))
  }, [id])

  if (!character) return

  return (
    <Link to={`/products/${id}`}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{character.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            className="rounded-xl"
            src={character.image}
            alt={character.name}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <button onClick={handleToggleFavorite}>
            {character.inFavorite
              ? <FaHeart size={30} fill={"#ee3d3d"} />
              : <FaRegHeart size={30} />
            }
          </button>

          <Button
            className="bg-red-300"
            onClick={handleDeleteCharacter}
          >
            Удалить
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default memo(CharacterCard)