import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "./interfaces";

const initialState: CharacterState = {
  characters: [],
  currentCharacter: null,
  isLoading: false,
  error: null
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getAllCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload.map((character) => ({
        ...character,
        inFavorite: false
      }))
      state.isLoading = false
      state.error = null
    },

    getCharacterById(state, action: PayloadAction<Character>) {
      state.currentCharacter = action.payload
      state.isLoading = false
      state.error = null
    },

    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.push(action.payload)
    },

    editCharacter(state, action: PayloadAction<{ id: number; data: Partial<Character> }>) {
      const { id, data } = action.payload
      const index = state.characters.findIndex(character => character.id === id)
      if (index !== -1) {
        state.characters[id] = { ...state.characters[id], ...data }
      }
    },

    deleteCharacted(state, action: PayloadAction<{ id: number }>) {
      state.characters = state.characters.filter(el => el.id !== action.payload.id)
    },

    setInFavorite(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload
      const character = state.characters.find(character => character.id === id)
      if (character) {
        character.inFavorite = !character.inFavorite
      }
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },

    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  }
})

export const {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacted,
  setInFavorite,
  setError,
  setLoading
} = characterSlice.actions;

export default characterSlice.reducer;