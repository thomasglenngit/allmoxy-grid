import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie, editMovie } from '../../actions'
import MovieForm from './MovieForm'

class MovieEdit extends React.Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editMovie(this.props.match.params.id, formValues)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Edit Stream</h3>

      </div>
    )
  }
}

export default connect()(MovieEdit)