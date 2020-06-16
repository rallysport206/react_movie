import React, {useState} from 'react';

export default function SearchMovies(){

    //states - input query, movies
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) =>{ 
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=34502a8777f1cfa72eccf33e8904ac5a&language=en=US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err){
            console.error(err);
        }

    }

    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Move Name</label>
                <input className="input" name="query" type="text" placeholder="i.e. Star Wars"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                        <div className="card__content">
                        <h3 className="card__title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card__desc">OVERVIEW: {movie.overview} </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ) 
}
