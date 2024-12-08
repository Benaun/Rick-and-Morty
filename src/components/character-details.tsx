import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCurrentCharacter } from "../model/character/api";

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isLoading, setIsloading] = useState<boolean>(true)
  const { currentCharacter } = useAppSelector(state => state.characters)

  useEffect(() => {
    fetchCurrentCharacter(Number(id), dispatch)
    setIsloading(false)
  }, [id])

  if (isLoading) return <div>Загрузка...</div>;
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