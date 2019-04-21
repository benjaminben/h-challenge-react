import React, {Component} from 'react'
import {connect}          from 'react-redux'
import VehiclesView       from '../components/VehiclesView'

class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filt: ""
    }
  }

  componentDidMount() { window.scroll(0,0) } // ;)

  render() {
    return (
      <VehiclesView
        {...this.props}
        {...this.state}
        vehicles={this.props.vehicles.filter(v => {
          const title = `${v.Make} ${v.Model}`.toLowerCase()
          return title.match(this.state.filt.toLowerCase())
        })}
        updateFilter={to => this.setState({filt: to})} />
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
