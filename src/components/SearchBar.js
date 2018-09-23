import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <p>disini seach bar</p>
      <input type="text" onChange={props.cari} placeholder="please input text..."/>
    </div>
  )
}

export default SearchBar;
