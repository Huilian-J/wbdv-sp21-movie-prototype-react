import React, {useState, useEffect} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import movieService from "../services/movie-service";

const SearchScreen = () => {
    const history = useHistory();
    const {title} = useParams();
    const [searchTitle, setSearchTitle] = useState(title);
    const [popular, setPopular] = useState(true);
    const [results, setResults] = useState({results:[]});
    useEffect(() => {
        // if(title !== undefined && title.type !== undefined) {
            setSearchTitle(title)
            findMoviesByTitle(title)
    },[title])
    const findMoviesByTitle = (title) => {
        if (title === undefined || title === "" || title.type !== undefined) {
            setPopular(true)
            movieService.findPopular()
                .then((result) => {
                    setResults(result)
                })
        } else {
            setPopular(false)
            history.push(title);
            movieService.findMoviesByTitle(title)
                .then((results) => {
                    setResults(results)
                })
        }
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
            {
                popular && <h3>Popular Movies</h3>
            }
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