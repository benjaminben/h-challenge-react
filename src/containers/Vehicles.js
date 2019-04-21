import React, {Component} from 'react'
import {connect}          from 'react-redux'
import VehiclesView       from '../components/VehiclesView'

class Vehicles extends Component {
  render() {
    return (
      <VehiclesView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)
