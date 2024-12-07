import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import CharacterCard from "./character-card"
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchCharacters } from "../model/character/api"
import { Button } from "./ui/button"

export default function CharacterList() {
  const [search, setSearch] = useState<string>('')
  const [isfilterByFavorite, setIsFilterByFavorite] = useState<boolean>(false)

  const { characters, isLoading, error } = useAppSelector((state) => state.characters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchCharacters(dispatch)
  }, [])

  const searchedAndFilteredCharacters = useMemo(() => {
    const searchedCharacters = characters.filter(character => character.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    if (!isfilterByFavorite) return searchedCharacters
    return searchedCharacters.filter(character => character.inFavorite === true)
  }, [characters, search, isfilterByFavorite])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

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
          <Button
            onClick={() => setIsFilterByFavorite(prev => !prev)}
            variant="outline"
            className={isfilterByFavorite ? "bg-red-500" : "bg-slate-200"}
          >
            Избранное
          </Button>
          <Link to="/create-product">
            Создать
          </Link>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-4">
          {!searchedAndFilteredCharacters.length
            ? <div>Персонажи не найдены</div>
            : searchedAndFilteredCharacters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            )
            )}
        </div>
      </div>
    </section >
  )
}