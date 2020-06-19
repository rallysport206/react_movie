import React from 'react';

export default function MovieCard({movie}){

    return(
        <div className="card">
            <img className="card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className="card__content">
                <h1 className="card__title">{movie.title}</h1>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card__desc">OVERVIEW: {movie.overview} </p>
            </div>
        </div>
    )
};