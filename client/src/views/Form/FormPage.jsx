import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, createActivities } from "../../redux/action/action";


export default function Form() {
  const initialState = {
    name: "",
    season: "",
    duration: "",
    difficulty: 0,
    pais: [],
  };
  const [nameCountries, setName] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    setName({
      ...nameCountries,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivities(nameCountries));
    alert('actividad creada')
    setName(initialState);
    
  };

  const countries = useSelector((state) => state.countries);
  const countriesMap =  countries?.map((e) => (
    <option key={e.id}>{e.name}</option>
  ) 
  )


   //["Verano", "Otoño", "Invierno", "Primavera"]

  const country = (e) => {
    setName({
      ...nameCountries,
      pais: nameCountries.pais.includes(e.target.value)
        ? nameCountries.pais
        : [...nameCountries.pais, e.target.value],
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label htmlFor="difficulty"> Difficulty</label>
        <input
          type="text"
          name="difficulty"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="duration"> Duration</label>
        <input
          type="text"
          name="duration"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="season"> Season</label>
        <input
          type="text"
          name="season"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="pais">Country</label>
        <select name="pais" onChange={(e) => country(e)}>
          <option>paises</option>
          { countriesMap }
        </select>
        <div>
          {nameCountries.pais.map((e, i) => {
            return (
              <div key={i}>
                <p>{e}</p>
              </div>
            );
          })}
        </div>
      </div>

      <button type="submit">crear</button>
    </form>
  );
}
