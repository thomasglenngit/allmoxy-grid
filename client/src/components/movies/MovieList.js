import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions'
import { Link } from 'react-router-dom'


class MovieList extends React.Component {

  componentDidMount() {
    this.props.fetchMovies()
    console.log(this.props)
  }

  renderAdmin(movie) {
    return (
      <div className="right floated content">
        <Link to={`/movies/edit/${movie.id}`} className="ui button inverted primary">Edit</Link>
        <Link to={`/movies/delete/${movie.id}`} className="ui button inverted orange">Delete</Link>
      </div>
    )
  }
  

  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className="item" key={movie.id}>
          {this.renderAdmin(movie)}
          <i className="large middle aligned film icon"></i>
          <div className="content">
            <Link to={`/movies/${movie.id}`} className="header">{movie.title}</Link>

          <div className="description">Description:  {movie.description}</div>
          <div className="price">Price:  {movie.price}</div>
          <div className="quantity">Quantity:  {movie.quantity}</div>
          <div className="image">Image:  {movie.image}</div>
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

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies)
    }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)