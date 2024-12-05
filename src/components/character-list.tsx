import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import CharacterCard from "./character-card"
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchCharacters } from "../model/character/api"

export default function CharacterList() {
  const [search, setSearch] = useState<string>('')

  const { characters, isLoading, error } = useAppSelector((state) => state.characters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchCharacters(dispatch)
  }, [])

  const searchedCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!characters) return <div>Персонажи не найдены</div>;

  return (
    <section className="container text-center mb-5">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-4xl">Список персонажей</h2>
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Поиск по имени"
            className="p-2 bg-slate-300 rounded-xl"
          />
          <Link to="/create-product">
            Создать
          </Link>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-4">
          {searchedCharacters?.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          )
          )}
        </div>
      </div>
    </section>
  )
}