import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies, fetchTitles, fetchDescriptions, fetchPrices, fetchQuantities } from '../../actions'
import { Link } from 'react-router-dom'


class MovieList extends React.Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  componentDidUpdate() {
    if (this.renderSortDropdown('.item') === 'description') {
      this.props.fetchDescriptions()
    }
    if (document.querySelector('.item') === 'prices') {
      this.props.fetchPrices()
    }
    if (document.querySelector('.item') === 'quantities') {
      this.props.fetchQuantities()
    }
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

  renderSortDropdown() {
    // const selectSort = document.querySelector('.dropdown')

    // selectSort.addEventListener('change', (event) => {
    //   const item = document.querySelector('.item')
    //   item.textContent = event.target.value
    // })
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