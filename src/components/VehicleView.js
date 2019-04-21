import React  from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
  const v = props.vehicle
  const atts = Object.keys(v).filter(k => k !== "Make" && k !== "Model" && k !== "id")
  return (
    <div id="Vehicle">
      <h1>{`${v.Make} ${v.Model}`}</h1>
      { atts.map((a,i) => {
        return <p key={i}>{`${a}: ${v[a]}`}</p>
      }) }
      <h2><Link to="/">Back</Link></h2>
    </div>
  )
}
