import React from "react"
import {Link} from "react-router-dom"
import "../styles/Vehicles.css"

export default (props) => {
  return (
    <div id="Vehicles">
    {
      props.vehicles.map((v,i) => {
        return(
          <Link key={i} to={`/${v.id}`} className="vehicle">{`${v.Make} ${v.Model}`}</Link>
        )
      })
    }
    </div>
  )
}
