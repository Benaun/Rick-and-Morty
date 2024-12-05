import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { setLoading, setError, getCharacterById } from "../model/character/characte.slice";
import { Character } from "../model/character/interfaces";

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentCharacter, isLoading, error } = useAppSelector(state => state.characters)

  const URL = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    const fetchCurrentCharacter = async (id: number) => {
      dispatch(setLoading(true))
      dispatch(setError(null))
      try {
        const response: Response = await fetch(`${URL}/${id}`)
        if (!response.ok) {
          throw new Error(`Статус: ${response.status}`)
        }

        const character: Character = await response.json()
        dispatch(getCharacterById(character))
      } catch (error) {
        if (error instanceof Error) {
          console.error('Произошла ошибка при загрузке персонажа:', error);
          dispatch(setError(error.message))
        }
        dispatch(setLoading(false))
      }
    }
    fetchCurrentCharacter(Number(id))
  }, [dispatch, id])

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!currentCharacter) return <div>Персонаж не найден</div>;

  return (
    <div>
      <button onClick={() => navigate('/')}>
        На Главную
      </button>
      <div>
        <img
          src={currentCharacter.image}
          alt={currentCharacter.name}
        />
        <div>
          <h1>{currentCharacter.name}</h1>
          <p>
            <strong>Статус:</strong> {currentCharacter.status}
          </p>
          <p>
            <strong>Пол:</strong> {currentCharacter.gender}
          </p>

          <div style={{ marginTop: '20px' }}>
            <Link to={`/products/${currentCharacter.id}/edit`}>
              <button>Редактировать</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}