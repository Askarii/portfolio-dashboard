import React from 'react'
import style from './search.module.css'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
    <div className={style.container}>
      <MdSearch />
      <input type='text' placeholder={placeholder} className={style.input} />
    </div>
  )
}

export default Search