import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCurrentCharacter } from "../model/character/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Button } from "./ui/button";

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentCharacter } = useAppSelector(state => state.characters)

  useEffect(() => {
    fetchCurrentCharacter(Number(id), dispatch)
  }, [id])

  if (!currentCharacter) return <div>Персонаж не найден</div>;

  return (
    <div className="flex flex-col justify-start gap-4 h-[800px] w-[600px]">
      <Button
        variant="outline"
        onClick={() => navigate('/')}
        className="w-32 bg-slate-400"
      >
        На Главную
      </Button>
      <Card className="">
        <CardHeader>
          <CardTitle>{currentCharacter.name}</CardTitle>
        </CardHeader>
        <div className="flex w-full gap-3">
          <CardContent className="w-3/5">
            <img
              className="rounded-xl"
              src={currentCharacter.image}
              alt={currentCharacter.name}
            />
          </CardContent>
          <CardContent className="h-full w-2/5 flex flex-col">
            <p><span className="underline">Status:</span> {currentCharacter.status}</p>
            <p><span className="underline">Species:</span> {currentCharacter.species}</p>
            <p><span className="underline">Gender:</span> {currentCharacter.gender}</p>
            <p><span className="underline">Location:</span> {currentCharacter.location.name}</p>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}