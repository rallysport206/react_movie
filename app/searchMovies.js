import React from 'react';

export default function SearchMovies(){

    const searchMovies = async (e) =>{ 
        e.preventDefault();
        console.log('submit');

        const query = "star wars";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=34502a8777f1cfa72eccf33e8904ac5a&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err){
            console.error(err);
        }

    }

    return(
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Move Name</label>
            <input className="input" name="query" type="text" placeholder="i.e. Star Wars"/>
            <button className="button" type="submit">Search</button>
        </form>
    ) 
}
