import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterContinents,
  getCountries,
  orderByCriteria,
  orderByPopulation,
  getActivities,
} from "../../redux/action/action";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Paginado from "../../components/Paginado";
import SearchBar from "../../components/SearchBar";
import NavBar from "../NavBar/NavBar";
import { IoArrowUp, IoArrowDown } from "react-icons/io5";


const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const tactivity = useSelector((state) => state.tactivity);
  const [currentPage, setCurrentpage] = useState(1);
  const [order, setOrder] = useState("");
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries =
    !allCountries.error &&
    allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  const [filters, setFilters] = useState({});

  const paginado = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  const [ filterIsActive, setFilterIsActive ] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterContinents(e) {
    dispatch(filterContinents(e.target.value));
  }

  // function handleFilterCreate(e) {
  //     console.log(e.target.value)
  //     dispatch(filterCreate(e.target.value))
  // }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByCriteria(e.target.value));
    setCurrentpage(1);
    setOrder(`Ordenado ${e.target.value}`);
    //document.getElementById('name').selectedIndex='DEFAULT'
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentpage(1);
    setOrder(`Ordenado ${e.target.value}`);
    //document.getElementById('name').selectedIndex='DEFAULT'
  }
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    
    <>
      <>
          <NavBar />
          <div>
            <div>
              <div>
                <p>{filterIsActive ? "Hide" : "Show"} Filters</p>
              </div>
              <button onClick={() => setFilterIsActive(!filterIsActive)}>
                {filterIsActive ? <IoArrowUp /> : <IoArrowDown />}
              </button>
            </div>
          </div>
        </>
      <h1>Countries</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        volver a cargar todos los Paises
      </button>
      <SearchBar />
      <div>
        <select
          id="name"
          onChange={(e) => handleSort(e)}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Orden por nombre
          </option>
          <option value="a-z">Ascendente</option>
          <option value="z-a">Descendiente</option>
        </select>
        <select onChange={(e) => handleSortPopulation(e)}>
          <option value="max">Maxima población</option>
          <option value="min">Minima población</option>
        </select>
        <select onChange={(e) => handleFilterContinents(e)}>
          <option value="todo">Todos</option>
          <option value="South America">Sur America</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="North America">Norte America</option>
        </select>
        {/* <label htmlFor='activity'>Filter by Activity</label> */}
        <select name="activity" id="activity" onChange={(e) => handleFilter(e)}>
          <option value="0">Filter by Activity</option>
          {tactivity?.map((a) => {
            return (
              <option key={a.tactivity_id} value={a.tactivity_id}>
                {a.name}
              </option>
            );
          })}
        </select>
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
        <div></div>
        {!currentCountries.length ? (
          <img
            src="https://www.womgp.com/blog/wp-content/uploads/2021/03/error-404.jpg"
            width="500px"
            height="250px"
            alt="img not found"
          ></img>
        ) : (
          currentCountries?.map((el) => {
            return (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                img={el.flags}
                continents={el.continents}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
