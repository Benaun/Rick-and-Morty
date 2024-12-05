type Info = {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export interface Character {
  id: number,
  name: string,
  status: string,
  gender: string,
  image: string,
  inFavorite: boolean
}

export interface CharacterResponse {
  info: Info,
  results: Character[]
}


export interface CharacterState {
  characters: Character[],
  currentCharacter: Character | null,
  isLoading: boolean,
  error: string | null
}