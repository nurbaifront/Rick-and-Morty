
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./Components/Filter/Filters";
import Cards from "./Components/Cards/Cards";
import Padination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import CardDetails from "./Components/Cards/CardDetails";

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
    </div>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails/>}/>
      <Route path="/episodes" element={<Episode/>}/>
       <Route path="/episodes/:id" element={<CardDetails/>}/>

      <Route path="/location" element={<Location/>}/>
       <Route path="/location/:id" element={<CardDetails/>}/>

    </Routes>
    </Router>
  );
}

const Home = () => {
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
  <div className="App">
    <h1 className="text-center mb-4">Characters</h1>
    <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

    <div className  ="container">
      <div className  ="row">
          <Filters
          setGender={setGender}
           setStatus={setStatus}
            setPageNumber={setPageNumber}
             setSpecies={setSpecies}/>
        <div className  ="col-lg-8 col-12">
            <div className  ="row">
             <Cards page='/' results={results}/>
            </div>
        </div>
      </div>
    </div>

    <Padination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
  </div>

  )
}

export default App

