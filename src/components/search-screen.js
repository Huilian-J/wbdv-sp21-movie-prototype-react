import React, {useState, useEffect} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import movieService from "../services/movie-service";

const SearchScreen = () => {
    const history = useHistory();
    const {title} = useParams();
    console.log(title);
    const [searchTitle, setSearchTitle] = useState(title);
    const [results, setResults] = useState({results:[]});
    useEffect(() => {
        setSearchTitle(title)
        findMoviesByTitle(title)
    },[title])
    const findMoviesByTitle = (title) => {
        history.push(title);
        movieService.findMoviesByTitle(title)
            .then((results) => {
                setResults(results)
            })
    }
    return (
        <div>
            <h2>Search Screen</h2>
            <input value={searchTitle}
                   onChange={(event) => {
                       setSearchTitle(event.target.value)
                   }}
                   className="form-control" />
            <button
                onClick={() => {
                    findMoviesByTitle(searchTitle)
                }}
                className="btn btn-primary">
                Search
            </button>
            <ul className="list-group">
                {
                    results.results && results.results.map((movie) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/details/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchScreen;