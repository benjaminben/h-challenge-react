import React, {Component} from 'react'
import {Switch, Route}    from 'react-router-dom'
import {connect}          from 'react-redux'
import Vehicles           from '../containers/Vehicles'
import Vehicle            from '../containers/Vehicle'
import Loader             from '../containers/Loader'
import request            from '../actions/request'

class Stage extends Component {
  componentDidMount() {
    this.props.fetchVehicles()
  }

  render() {
    const {props} = this
    return (
      props.vehicles.length
      ? <Switch>
          <Route exact path="/" component={Vehicles} />
          <Route path="/:vid" component={Vehicle} />
        </Switch>
      : <Loader />
    )
  }
}

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVehicles: () => {
      Promise.resolve().then(() => {
        return dispatch(request("/vehicles.json", "vehicles"))
      }).then(payload => {
        dispatch({type: "vehicles:all", payload})
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage)
