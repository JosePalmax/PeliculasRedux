import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    peliculas: [],
    pelicula: [],
    favoritas: []
}

export const peliSlice = createSlice({
    name: "peliculas",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.peliculas = action.payload
        },
        setFilm: (state, action) => {
            state.pelicula = action.payload
        },
        setFavoritas: (state, action) => {
            state.favoritas.push(action.payload)
        },
        deleteFavoritas: (state, action) => {
            state.favoritas.splice(state.favoritas.indexOf(action.payload.id))
        }
    }
})

export const { setFilms, setFilm ,setFavoritas, deleteFavoritas } = peliSlice.actions