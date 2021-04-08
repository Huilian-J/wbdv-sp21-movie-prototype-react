import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import movieService from "../services/movie-service";

const SearchScreen = () => {
    const history = useHistory();
    const { title, pageId } = useParams();
    const [searchTitle, setSearchTitle] = useState(title);
    const [popular, setPopular] = useState(true);
    const [results, setResults] = useState({ results: [] });
    useEffect(() => {
        // if(title !== undefined && title.type !== undefined) {
        setSearchTitle(title)
        findMoviesByTitle(title, pageId)
    }, [title, pageId])
    const findMoviesByTitle = (title, pageId) => {
        if (title === undefined || title === "" || title.type !== undefined) {
            setPopular(true)
            movieService.findPopular()
                .then((result) => {
                    setResults(result)
                })
        } else {
            setPopular(false)
            if (pageId === undefined || pageId === "") {
                movieService.findMoviesByTitle(title, 1)
                    .then((results) => {
                        setResults(results)
                    })
            }
            else {
                movieService.findMoviesByTitle(title, pageId)
                    .then((results) => {
                        setResults(results)
                    })
            }
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
            {
                (searchTitle !== undefined && searchTitle !== "") &&
                <Link to={`/search/${searchTitle}/page/1`}
                    className="btn btn-primary">
                    Search
                </Link>
            }
            {
                (searchTitle === undefined || searchTitle === "") &&
                <Link to={`/search`}
                    className="btn btn-primary">
                    Search
                </Link>
            }

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
            {
                (!popular && (Number(results.page) >= 1) && (Number(results.page) <= results.total_pages)) &&
                <div className="container">
                    <div className="row">
                        {
                            (Number(results.page) > 1) &&
                            <Link to={`/search/${title}/page/${Number(results.page) - 1}`}
                                className="btn btn-outline-primary col-2">
                                &lt;&lt;
                            </Link>
                        }
                        <div className="col-2">{results.page}</div>
                        {
                            (Number(results.page) < results.total_pages) &&
                            <Link to={`/search/${title}/page/${Number(results.page) + 1}`}
                                className="btn btn-outline-primary col-2">
                                &gt;&gt;
                            </Link>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchScreen;