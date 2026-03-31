import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import image from './assets/header.png' 
import Filters from "./Components/Filter/Filters";
import Cards from "./Components/Cards/Cards";
import Padination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";

function App() {
let [pageNumber, setPageNumber] = useState(1);

let [search, setSearch] = useState("");

let [status, setStatus] = useState("");

let [gender, setGender] = useState("");

let [species, setSpecies] = useState("");

console.log(pageNumber);

let [fetchedData, updateFetchData] = useState([]);
let { info, results} = fetchedData


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  },[api]);

  return (
  <div className  ="App">
    <div className  ="text-center ">
    <img style={{width: '250px', height: '130px'}} src={image} alt="icons"/>
    </div>

    <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

    <div className  ="container">
      <div className  ="row">
          <Filters

          setGender={setGender}
           setStatus={setStatus}
            setPageNumber={setPageNumber}
             setSpecies={setSpecies}/>
        <div className  ="col-8">
            <div className  ="row">
             <Cards results={results}/>
            </div>
        </div>
      </div>
    </div>

    <Padination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
  </div>

  )
}

export default App

