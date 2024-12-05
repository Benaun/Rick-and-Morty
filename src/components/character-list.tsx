import { useEffect } from "react"
import { Link } from "react-router-dom"

import CharacterCard from "./character-card"
import { useAppDispatch, useAppSelector } from "../store/store"
import { fetchCharacters } from "../model/character/api"

export default function CharacterList() {
  // const [page, setPage] = useState<number>(1)
  // const [search, setSearch] = useState<string>('')
  // const [active, setActive] = useState(1)

  const { characters, isLoading, error } = useAppSelector((state) => state.characters)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchCharacters(dispatch)
  }, [])


  // const totalPages = characters?.info.pages ?? 1
  // const arrayForPaggintaion = Array.from({ length: totalPages }, (_, i) => i + 1)

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }

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
            placeholder="Поиск по имени"
            className="p-2 bg-slate-300 rounded-xl"
          />
          <Link to="/create-product">
            Создать
          </Link>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-4">
          {characters?.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          )
          )}
        </div>

        {/* <div className="flex justify-center gap-2">
          {arrayForPaggintaion.map(el =>
            <button
              key={el}
              onClick={() => { setPage(el); setActive(el) }}
              disabled={el === page}
              className={`p-2 rounded-full ${el === active ? 'bg-amber-200' : 'bg-zinc-400'}`}
            >
              {el}
            </button>
          )}
        </div> */}
      </div>
    </section>
  )
}