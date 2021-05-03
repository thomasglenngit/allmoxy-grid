import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../actions.js'
import { Link } from 'react-router-dom'

class MovieList extends React.Component {
  

  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className="item" key={movie.id}>
          {this.renderAdmin(movie)}
          <i className="large middle aligned film icon"></i>
          <div className="content">
            <Link to={`/movies/${movie.id}`} className="header">{movie.title}</Link>

          <div className="description">{movie.description}</div>
          <div className="price">{movie.price}</div>
          <div className="quantity">{movie.quantity}</div>
          <div className="image">{movie.image}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to="/movies/new" className="ui button primary">
          Create Movie Entry
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}

export default MovieList