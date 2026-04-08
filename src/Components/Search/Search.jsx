import React from 'react'
import styles from './Search.module.scss';


const Search = ( { setSearch, setPageNumber } ) => {
  return (
    <form className  ='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input className  ={styles.input} type="text" placeholder='Search for Characters' onChange={(e) => { setPageNumber(1); setSearch(e.target.value); }} />
        <button className  ={`${styles.btn} btn btn-primary fs-5`} onClick={(e)=> {
            e.preventDefault();
            }}>Search</button>
    </form>
  )
}

export default Search
