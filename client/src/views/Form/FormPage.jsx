import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, createActivities } from "../../redux/action/action";
import { Link } from "react-router-dom";
import validate from "../../validator";
import style from "./FormPage.module.css";

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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validate(nameCountries));
  }, [nameCountries]);

  const handleChange = (e) => {
    setName({
      ...nameCountries,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(validate({
  //     if(nameCountries.name && nameCountries.difficulty && nameCountries.season && nameCountries.duration && nameCountries.pais.length){
      
  //   }))
  //   dispatch(createActivities(initialState));
  //   alert("actividad creada");
  //   setName(initialState);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(nameCountries));
    if (nameCountries.name && nameCountries.difficulty && nameCountries.duration && nameCountries.season && nameCountries.countries.length) {
    console.log(nameCountries);
    dispatch(createActivities(nameCountries));
    alert('Actividad Creada');
    setName({
      name: "",
      season: "",
      duration: "",
      difficulty: 0,
      pais: [],
    });
  }else {
    alert('All fields are required!!')
} 
    // history.push('/home');
  }


  const countries = useSelector((state) => state.countries);
  const countriesMap = countries?.map((e) => (
    <option key={e.id}>{e.name}</option>
  ));
  useEffect(() => {
    setErrors(validate(nameCountries));
  }, [nameCountries]);

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
    <form onSubmit={(e) => handleSubmit(e)} className={style.mainConteiner}>
      
      <div className={style.optionForm}>
      	 <label htmlFor="name" className={style.primero}>{" "}Name </label>
          <input
            className={style.segundo}
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            >
          </input>
         {errors.name ? <small>{errors.name}</small> : <small>&nbsp;</small>}
      </div>
      
      
  		<div className={style.optionForm}>
      		 <label htmlFor="difficulty" className={style.primero}> {" "}Difficulty</label>
            <select
              className={style.segundo}
              type="text"
              name="difficulty"
              onChange={(e) => handleChange(e)}
            >
              <option value="0">-Seleccionar una opción-</option>
              <option value="1">Pacifico</option>
              <option value="2">Facil</option>
              <option value="3">Normal</option>
              <option value="4">Dificil</option>
              <option value="5">Profesional</option>
            </select>
        
        		 {errors.difficulty ? (<small>{errors.difficulty}</small>) : (<small>&nbsp;</small>)}
      </div>
      
       
			<div className={style.optionForm}>
      		<label htmlFor="duration" className={style.primero}>{" "} Duration</label>
          <input
            className={style.segundo}
            type="text"
            name="duration"
            onChange={(e) => handleChange(e)}
            ></input>
          {errors.duration ? (<small>{errors.duration}</small>) : (<small>&nbsp;</small>)}
      </div>
     
   
        
 			
      <div className={style.optionForm}>
        <label htmlFor="season" className={style.primero}>
          {" "}
          Season
        </label>
        <input
          className={style.segundo}
          type="text"
          name="season"
          onChange={(e) => handleChange(e)}
        ></input>
        {errors.season ? <small>{errors.season}</small> : <small>&nbsp;</small>}
      </div>
      
      
      <div className={style.optionForm}>
        <label htmlFor="pais" className={style.primero}>Country</label>
        <select
          name="pais"
          className={style.segundo}
          onChange={(e) => country(e)}
        >
          <option>paises</option>
          {countriesMap}
        </select>
        {errors.pais ? <small>{errors.pais}</small> : <small>&nbsp;</small>}
      </div>
      
      	<div className={style.optionForm}> 
          {nameCountries.pais.map((e, i) => {
            return (
              <div key={i}>
                <p>{e}</p>
              </div>
            );
          })}
      	</div>
      
      
      
      <button type="submit">crear</button>

      <Link to="/home">Home</Link>
    </form>
  );
}




