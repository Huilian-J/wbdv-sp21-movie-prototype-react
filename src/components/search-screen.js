import React, {useState, useEffect} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import movieService from "../services/movie-service";
import tmdb from "../tmdb.png";
import searchmovie from "../searchmovie.png";

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img width="50" src={tmdb} />
                <a className="navbar-brand" href="#">MovieDB Search</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary">Sign In</button>
                </div>
            </nav>
            {/*<table>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <img width="50" src={tmdb} />*/}
            {/*        </td>*/}
            {/*        <td>*/}
            {/*            MovieDB Search*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <p><img width="50" src={searchmovie} />Search Movie</p>
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