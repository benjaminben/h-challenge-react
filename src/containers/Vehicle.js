import React, {Component} from 'react'
import {connect}          from 'react-redux'
import {withRouter}       from 'react-router'
import VehicleView        from '../components/VehicleView'

class Vehicle extends Component {
  render() {
    return (
      <VehicleView {...this.props} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const vid = parseInt(ownProps.match.params.vid)
  const vehicle = state.vehicles.filter(v => v.id === vid)[0]
  return {
    vehicle
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vehicle))
