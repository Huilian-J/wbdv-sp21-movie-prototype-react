import React, {useState, useEffect} from 'react'
import movieService from '../services/movies-service'
import {Link, useParams} from "react-router-dom";

const Search = () => {
    const {mid} = useParams()
    const [results, setResults] = useState({Search:[]})
    useEffect(() => {
        if(mid) {
            movieService.findMovieById(mid)
                .then(results => setResults(results))
        }
    })
    return (
        <div>
            <h1>Search</h1>
            <input value={mid}/>
            <button>Search</button>
            <ul className="list-group">
                {
                    results.map(movie =>
                    <li key={movie.mid}>
                        {movie.title}
                    </li>
                    )
                }
                <li>
                    <Link to="/details/123">
                        Results
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Search