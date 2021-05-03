import React from 'react'
import { connect } from 'react-redux'
import { createMovie } from '../../actions'
import MovieForm from './MovieForm'


class MovieCreate extends React.Component {
  
  render() {
    return (
      <div>
        <h3>Enter a Movie Title</h3>
        <MovieForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, {createMovie})(MovieCreate)