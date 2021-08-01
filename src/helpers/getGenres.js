import axios from 'axios'

// Me trae una lista de generos
export const getGenres = async () => {
    const api_key = "6ec6635a806c61e4bb6f81c871f8c34c"
    const resp = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
    const { data: { genres } } = resp
    const genresCollection = genres.slice(0, 6)
    return genresCollection
}
