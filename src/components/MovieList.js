import React, {useState, useEffect} from 'react';

//components
import MovieCard from './MovieCard';
import SearchBar from './SearchBar'

const MovieList = (props) => {

    const [searchList, setSearchList] = useState(props.movies)
    const [query, setQuery] = useState('')

    useEffect(() => {
        console.log('inside effect')
        console.log(props.movies)
            let searchMovies = props.filterList(query, props.movies, props.setList)
            console.log(searchMovies)
            setSearchList(searchMovies)
        },[query, props.movies]);

        const movieList = searchList.map((movie, index) => {
            return <MovieCard movie={movie} buttonTitle={props.buttonTitle} key={index}
            transfareMovie={props.transfareMovie} setList={props.setList} movies={props.movies}
            toMainList={props.toMainList} setToMainList={props.setToMainList}/>
        }
        )

    // const movieList = props.movies.map((movie, index) => {
    //     return <MovieCard movie={movie} buttonTitle={props.buttonTitle} key={index}
    //     transfareMovie={props.transfareMovie} setList={props.setList} movies={props.movies} mainMovieList={props.mainMovieList}
    //     toSearchList={props.toSearchList} toMainList={props.toMainList} setFromSearchList={props.setSearchList} setToSearchList={props.setToSearchList} 
    //     setToMainList={props.setToMainList} isSearching={props.isSearching}
    //     index={index}/>
    // }
    // )
    

    return (
        <div>
            <div className="row m-4">
                <h4>{props.buttonTitle}</h4>
                <span className="btn border border-secondary rounded-circle ml-2 mb-2">{searchList.length}</span>
            </div>

            <div className="card">
                <div className="card-header">
                    {/* <SearchBar setSearchList={props.setSearchList} setIsSearching={props.setIsSearching} 
                    mainMovieList={props.mainMovieList} filterList={props.filterList}/>  */}
                    <SearchBar setQuery={setQuery}/>
                </div>
                <div className="card-body">
                    {
                        (searchList.length)? (
                            movieList 
                        ):(
                            <div className="card">
                                <div className="card-body col">
                                    <h6 className="card-subtitle">no movie found</h6>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;