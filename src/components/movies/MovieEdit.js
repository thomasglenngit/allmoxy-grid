import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, editMovie } from '../../actions.js'
import Form from '../Form'

class MovieEdit extends React.Component {

  render() {
    return (
      <div>
        <h3>Edit Stream</h3>

      </div>
    )
  }
}

export default connect()(MovieEdit)