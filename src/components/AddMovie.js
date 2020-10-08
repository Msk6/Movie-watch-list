import React, {useState} from 'react';

const AddMovie = (props) => {
  const [newMovie, setNewMovie] = useState([])

  const handleChange = (event) => {
    setNewMovie(event.target.value)
    console.log(newMovie)
  }
  
// ---- when use this code i can't add the same input if i don't rewrite it again ----

  /*let newMovie = []
  
  const handleChange = (event) => {
    newMovie = event.target.value
    console.log(newMovie)
  }*/

  const handleClick = () => {
    let newWatchlist = props.watchlist
    newWatchlist = newWatchlist.concat(newMovie)
    console.log(newWatchlist[0])
    props.setWatchlist(newWatchlist)
  }

    return (
        <div className="form-group col-lg-6 col-12 mx-auto">
      <div className="input-group my-3">
        <input className="form-control" type="text" onChange={handleChange} placeholder="Add movie.."/>
        <div className="input-group-append">
          <button className="btn btn-warning" onClick={handleClick} >Add</button>
        </div>
      </div>
    </div>
    )
}

export default AddMovie;