import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, deleteMovie } from '../../actions.js'

class MovieDelete extends React.Component {

  render() {
    return (
      <button className="ui button negative">Delete</button>

    )
  }
}

export default (MovieDelete)