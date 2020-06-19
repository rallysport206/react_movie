import React, {useState} from 'react';
import MovieCard from './movieCard';


export default function SearchMovies(){

    //states - input query, movies
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en=US&query=${query}&page=1&include_adult=false`;

    const searchMovies = async (e) =>{ 
        e.preventDefault();

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
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    ) 
}
