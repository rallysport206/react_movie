import React from 'react';

export default function SearchMovie() {
    return(
        <form className="form">
            <label className="label" htmlFor="query">Move Name</label>
            <input name="query" type="text" placeholder="i.e. Star Wars"/>
            <button className="button" type="submit">Search</button>
        </form>
    ) 
}
