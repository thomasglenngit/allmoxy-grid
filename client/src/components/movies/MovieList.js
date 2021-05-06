import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies, fetchTitles, fetchDescriptions, fetchPrices, fetchQuantities } from '../../actions'
import { Link } from 'react-router-dom'

const columnStyles = {
  fontWeight: 'bold'
}


class MovieList extends React.Component {

  componentDidMount() {
    this.props.fetchMovies()
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
          <i className="huge middle aligned film icon"></i>
          <div className="content">
            {/*  */}
            <div className="ui five column relaxed grid" >
              <div className="column" style={columnStyles}>
                <div className="item">Title</div>
                <Link to={`/movies/${movie.id}`} className="header">{movie.title}</Link>
              </div>

              <div className="column" style={columnStyles}>
                Description
                <div className="description">
                  {movie.description}
                </div>
              </div>

              <div className="column" style={columnStyles}>
                Price
                <div className="price">
                  {movie.price}
                </div>
              </div>

              <div className="column" style={columnStyles}>
                Quantity
                <div className="quantity">
                  {movie.quantity}
                </div>
              </div>
              
              <div className="column" style={columnStyles}>
                Image
                <div className="image">
                  {movie.image}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  renderSortDropdown() {
    return (
      <div className="dropdown">
        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Sort Results By:
        <i className="dropdown icon"></i>
            <div className="menu" id="select">
              <div className="item" value='title' onClick={this.props.fetchTitles}>Title</div>
              <div className="item" value='description' onClick={this.props.fetchDescriptions}>Description</div>
              <div className="item" value='price' onClick={this.props.fetchPrices}>Price</div>
              <div className="item" value='quantity' onClick={this.props.fetchQuantities}>Quantity</div>
            </div>
          </div>
        </div>
      </div>
    )
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
        <div style={{ float: 'left' }}>
          {this.renderSortDropdown()}
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

export default connect(mapStateToProps, { fetchMovies, fetchTitles, fetchDescriptions, fetchPrices, fetchQuantities })(MovieList)