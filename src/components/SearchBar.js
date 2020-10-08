import React, {useState} from 'react';

const SearchBar = (props) => {

  const handleChange = (event) => {
    let q = event.target.value
    props.setQuery(q)

  }
  return (
    <div className="form-group col-lg-6 col-12 mx-auto">
      <div className="input-group my-3">
        <input className="form-control" type="text" onChange={handleChange} placeholder="Find movie..." />
      </div>
    </div>
    )
}

export default SearchBar;

// const [query, setQuery] = useState('')

  // const handleChange = (event) => {
  //   let q = event.target.value
  //   setQuery(q)
  //   props.filterList(q, props.mainMovieList, props.setSearchList, props.setIsSearching)
  // }