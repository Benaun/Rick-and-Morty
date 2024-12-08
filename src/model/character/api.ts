import { AppDispatch } from "../../store/store"
import { setAllCharacters, getCharacterById } from "./characte.slice"
import { Character, CharacterResponse } from "./interfaces"

const URL = 'https://rickandmortyapi.com/api/character'

export const fetchCharacters = async (dispatch: AppDispatch): Promise<void> => {
  try {
    const response: Response = await fetch(URL)
    if (!response.ok) {
      throw new Error(`Статус: ${response.status}`)
    }
    const result: CharacterResponse = await response.json()
    dispatch(setAllCharacters(result.results))
  } catch (error) {
    if (error instanceof Error) {
      console.error('Произошла ошибка при загрузке персонажей:', error);
    }
  }
}

export const fetchCurrentCharacter = async (id: number, dispatch: AppDispatch): Promise<void> => {
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
    }
  }
}