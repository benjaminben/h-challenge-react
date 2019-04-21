import React from "react"
import {Link} from "react-router-dom"
import "../styles/Vehicles.css"

export default (props) => {
  return (
    <div id="Vehicles">
      <form>
        <label htmlFor="filter">Filter: </label>
        <input
          name="filter"
          type="text"
          value={props.filt}
          placeholder="make or model..."
          onChange={e => props.updateFilter(e.target.value)} />
      </form>
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
