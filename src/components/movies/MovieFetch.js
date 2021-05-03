import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../actions'

class MovieFetch extends React.Component {

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <div className="ui celled list">
          
        </div>
      </div>
    )
  }
}

export default MovieFetch