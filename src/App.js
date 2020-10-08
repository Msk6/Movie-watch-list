import React, {useState} from 'react';

//components
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie';

//import {watchlist, watched} from './data'

function App() {

  const [watchlist, setWatchlist] = useState([])
  const [watched, setWatched] = useState([])

  const moveMovie = (selectedMovie, fromList, toList, setFrom, setTo) => {
    let from = fromList.filter(movie => movie !== selectedMovie)
    let to = [selectedMovie].concat(toList)
    setFrom(from)
    setTo(to)
  }

  const filterList = (query, mainMovieList, setList) => {
      let newList = mainMovieList.filter(movie => movie.toLowerCase().includes(query.toLowerCase()))
      return newList
  }

  // const [searchWatchlist, setSearchWatchlist] = useState(watchlist)
  // const [searchWatched, setSearchWatched] = useState(watched)

  // const [isSearchingInWatchlist, setIsSearchingInWatchlist] = useState(false)
  // const [isSearchingInWatched, setIsSearchingInWatched] = useState(false)

  // const moveToWatchlist = (selectedMovie) => {
  //   let watchlistTemp = [selectedMovie].concat(watchlist)
  //   let watchedTemp = watched.filter(movie => movie !== selectedMovie)
  //   setWatchlist(watchlistTemp)
  //   setWatched(watchedTemp)
  // }

  // const moveToWatched = (selectedMovie) => {
  //   let watchedTemp = [selectedMovie].concat(watched)
  //   let watchlistTemp = watchlist.filter(movie => movie !== selectedMovie)
  //   setWatched(watchedTemp)
  //   setWatchlist(watchlistTemp)
  // }

  
  // const filterList = (query, currentList, setSearchList, setIsSearching) => {
  //   if (query === ""){
  //     setIsSearching(false)
  //   }
  //   else{
  //     setIsSearching(true)
  //     let newList = currentList.filter(movie => movie.toLowerCase().includes(query.toLowerCase()))
  //     setSearchList(newList)
      
  //   }
  // }

  // const filterList = (query, currentList, setList) => {
  //     let newList = currentList.filter(movie => movie.toLowerCase().includes(query.toLowerCase()))
  //     setSearchList(newList)
  //   }
  // }
      
  
  return (
  <div className="container">
    <AddMovie setWatchlist={setWatchlist} watchlist={watchlist}/>
    <div className="row">
      <div className="col-md-12 col-xl-6">
          
          <MovieList movies={watchlist} setList={setWatchlist} buttonTitle='Watched'
          transfareMovie={moveMovie} toMainList={watched} setToMainList={setWatched}
          filterList={filterList} />

      </div>
      <div className="col-md-12 col-xl-6" >
          <MovieList movies={watched} setList={setWatched} buttonTitle='UnWatch'
          transfareMovie={moveMovie} toMainList={watchlist} setToMainList={setWatchlist}
          filterList={filterList} />
        
        {/* {
          (isSearchingInWatchlist)? (
            <MovieList movies={searchWatchlist} setList={setWatchlist} buttonTitle='Watched'
            setSearchList={setSearchWatchlist} setIsSearching={setIsSearchingInWatchlist} isSearching={isSearchingInWatchlist} 
            transfareMovie={moveMovie} toSearchList={searchWatched} toMainList={watched} setToSearchList={setSearchWatched}
            setToMainList={setWatched}
            filterList={filterList} mainMovieList={watchlist}/>
          // <MovieList movies={searchWatchlist} setList={setWatchlist} buttonTitle='Watched'
          // setSearchList={setSearchWatchlist} setIsSearching={setIsSearchingInWatchlist} isSearching={isSearchingInWatchlist} 
          // transfareMovie={moveToWatched} filterList={filterList} mainMovieList={watchlist}/>
          ):(
            <MovieList movies={watchlist} setList={setWatchlist} buttonTitle='Watched'
            setSearchList={setSearchWatchlist} setIsSearching={setIsSearchingInWatchlist} isSearching={isSearchingInWatchlist}
            transfareMovie={moveMovie} toSearchList={searchWatched} toMainList={watched} setToSearchList={setSearchWatched}
            setToMainList={setWatched}
            filterList={filterList} mainMovieList={watchlist}/>
            // <MovieList movies={watchlist} setList={setWatchlist} buttonTitle='Watched'
            // setSearchList={setSearchWatchlist} setIsSearching={setIsSearchingInWatchlist} isSearching={isSearchingInWatchlist}
            // transfareMovie={moveToWatched} filterList={filterList} mainMovieList={watchlist}/>
          )
        }
          {/* <MovieList movies={watchlist} setList={setWatchlist} buttonTitle='Watched'
          transfareMovie={moveToWatched} filterList={filterList} /> */}
      {/* </div>
      <div className="col-md-12 col-xl-6" >
        {
          (isSearchingInWatched)? (
            <MovieList movies={searchWatched} setList={setWatched} buttonTitle='Unwatched'
            setSearchList={setSearchWatched} setIsSearching={setIsSearchingInWatched} isSearching={isSearchingInWatched}
            transfareMovie={moveMovie} toSearchList={searchWatchlist} toMainList={watchlist} setToSearchList={setSearchWatchlist}
            setToMainList={setWatchlist}
            filterList={filterList} mainMovieList={watched}/>
            // <MovieList movies={searchWatched} setList={setWatched} buttonTitle='Unwatched'
            // setSearchList={setSearchWatched} setIsSearching={setIsSearchingInWatched} isSearching={isSearchingInWatched}
            // transfareMovie={moveToWatchlist} filterList={filterList} mainMovieList={watched}/>
          ):(
            <MovieList movies={watched} setList={setWatched} buttonTitle='Unwatched'
            setSearchList={setSearchWatched} setIsSearching={setIsSearchingInWatched} isSearching={isSearchingInWatched}
            transfareMovie={moveMovie} toSearchList={searchWatchlist} toMainList={watchlist} setToSearchList={setSearchWatchlist}
            setToMainList={setWatchlist}
            filterList={filterList} mainMovieList={watched}/>
          // <MovieList movies={watched} setList={setWatched} buttonTitle='Unwatched'
          // setSearchList={setSearchWatched} setIsSearching={setIsSearchingInWatched} isSearching={isSearchingInWatched}
          // transfareMovie={moveToWatchlist} filterList={filterList} mainMovieList={watched}/>
          )
        } */} 
        
      </div>
    </div>
  </div>
  );
}

export default App;
