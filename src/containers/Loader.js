import React, {Component} from 'react'
import {connect}          from 'react-redux'
import LoaderView         from '../components/LoaderView'

class Loader extends Component {
  render() {
    return (
      <LoaderView {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
