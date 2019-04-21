import React, {Component} from 'react'
import {connect}          from 'react-redux'
import VehicleView        from '../components/VehicleView'

class Vehicle extends Component {
  render() {
    return (
      <VehicleView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle)
