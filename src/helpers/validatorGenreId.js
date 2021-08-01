import { getGenres } from "./getGenres"

// Valida si el genero de el genero existe
// Se realiza con el fin de evitar que se ingrese una url incorrecta

export const validatorGenreId = async (genreName) => {

    const genres = await getGenres()
    const result = genres.find(({ name }) => name === genreName)
    return result
}
