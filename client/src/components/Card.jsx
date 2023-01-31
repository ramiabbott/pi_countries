import React from "react";
import { Link } from "react-router-dom";

export default function Card({img, name, continents, id}) {
    return (
        <div>
            <Link to = {'/detail/' + id}>
           <img src={img} alt="img not found" height="75px" width="150px" />
            <h2>{name}</h2>
            <h3>{continents}</h3>
            </Link>
        </div>
    )
}