import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/action/action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function Detail(props) {
    console.log(props)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch,id])
    const myCountry = useSelector((state) => state.detail)
    console.log(myCountry[0])
   return (
    <div>
        {
            myCountry.length > 0 ?
             <div>
               <h1>Country: {myCountry[0].name}</h1>
                <h2>Continent: {myCountry[0].continent}</h2>
                <h2>Subregion: {myCountry[0].subregion}</h2>
                <h2>Area: {myCountry[0].area}</h2>
                <h2>Population: {myCountry[0].population}</h2>
                <h2>tactivities: {myCountry[0].tactivities.map(el => {
                    return (
                        <h5>{el.name}</h5>
                    )
                }
                 )
                    }</h2>
                <img src={myCountry[0].flags} alt = "img flag"/>
            </div>
             :
             <p>Loading...</p>
        }
        <Link to= '/home'>
            <button>volver</button>
        </Link>
    </div>
   )
}