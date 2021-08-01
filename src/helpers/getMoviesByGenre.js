import axios from 'axios'

// Consultar peliculas por genero 

export const getMoviesByGenre = async (genreId, page) => {
    const api_key = "6ec6635a806c61e4bb6f81c871f8c34c"
    const resp = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${api_key}&page=${page}`)
    const { data: { total_pages }, data: { results } } = resp
    const filteredMovies = results.filter(
        ({
            title,
            overview,
            poster_path,
            genre_ids,
            release_date,
            original_language,
            vote_average
        }) => {
            return (
                title !== "" &&
                overview !== "" &&
                poster_path !== null &&
                genre_ids.length > 0 &&
                release_date !== "" &&
                original_language !== "" &&
                vote_average > 0
            );
        }
    );
    const moviesCollection = filteredMovies.map(
        ({
            id,
            title,
            overview,
            vote_average,
            poster_path,
            genres,
            release_date,
            spoken_languages,
        }) => {
            return {
                id,
                title,
                overview,
                vote_average,
                poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
                release_date,
                spoken_languages,
                genres,
            };
        }
    );
    return { moviesCollection, total_pages }
}
