import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterState } from "./interfaces";

const initialState: CharacterState = {
  characters: [],
  currentCharacter: null,
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setAllCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload.map((character) => ({
        ...character,
        inFavorite: false
      }))
    },

    getCharacterById(state, action: PayloadAction<Character>) {
      state.currentCharacter = action.payload
    },

    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.unshift(action.payload)
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
  }
})

export const {
  setAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacted,
  setInFavorite,
} = characterSlice.actions;

export default characterSlice.reducer;