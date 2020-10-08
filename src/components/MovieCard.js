import React from 'react';


const MovieCard = (props) => {

    const handleTransfareMovie = () => {
        props.transfareMovie(props.movie, props.movies, 
            props.toMainList, props.setList, props.setToMainList)
    }

    const handleDeleteMovie = () => {
        let tempList = props.movies.filter(movie => movie !== props.movie)
        props.setList(tempList)
    }

    return (
        <div className="card">
            <div className="card-body row">
                <div className="col">
                <h6 className="card-subtitle">{props.movie}</h6>
                </div>
                <div className="col">
                    <div className="input-group my-3">
                        <button className="btn btn-warning" onClick={handleTransfareMovie}>{props.buttonTitle}</button>
                        <div className="input-group-append">
                            <button className="btn btn-danger" onClick={handleDeleteMovie}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

// const handleDeleteMovie = () => {
    //     let tempList = props.movies.filter(movie => movie !== props.movie)
    //     let mainTempList = props.mainMovieList.filter(movie => movie !== props.movie)
    //     //console.log(`index: ${props.index}`)
    //     /*let tempList = props.movies
    //     tempList.splice(props.index, 1)
    //     console.log(tempList)*/
    //     props.setFromSearchList(tempList)
    //     props.setList(mainTempList)
    // }

    // const handleTransfareMovie = () => {
        
    //     props.transfareMovie(props.movie, props.movies, props.toSearchList, props.setFromSearchList, props.setToSearchList)
    //     props.transfareMovie(props.movie, props.mainMovieList, props.toMainList, props.setList, props.setToMainList)
    // }