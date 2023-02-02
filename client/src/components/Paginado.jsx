import React from "react";
import styles from './Paginado.module.css'

export default function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allCountries/countriesPerPage); i++){
    pageNumbers.push(i+1)
    }

    return (
        <nav className={styles.cointainerPagination}>
           <ul className={styles.paginado}>
            { pageNumbers?.map((number) => {
            return(
                    <li className="number" key={number}>
                      <button className={styles.pgBtn} onClick={() => paginado(number)}>{number}</button>
                    </li>)
                })}
           </ul>
        </nav>
    )

}