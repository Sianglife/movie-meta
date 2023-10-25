'use client';
import React, { useState } from 'react';
import { getMovieData } from '../lib/search';

export default function SearchInput() {
    const [film_name, setFilmName] = useState('');
    return (
        <div>
            <input type="text" value={film_name} placeholder="Search for a movie" onChange={e => setFilmName(e.target.value)} />
            <br></br>
            <button onClick={e => getMovieData(film_name)}>Search</button>
        </div>
    )
}