import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getByName } from '../redux/action/action'

function SearchBar() {
  const [ searched, setSearched ] = useState('')
  const dispatch = useDispatch()

  const handle_submit = (e) => {
    e.preventDefault();
    dispatch(getByName(searched));
    setSearched("");
  };

  const handle_input_change = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  return (
   <div>
     <form onSubmit={(e) => handle_submit(e)}>
      <input
        type="text"
        placeholder="Search for a country"
        value={searched}
        onChange={(e) => handle_input_change(e)}
      />
    </form>
   </div>
  )
}

export default SearchBar