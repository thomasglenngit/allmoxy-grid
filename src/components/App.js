import React from 'react'
import Header from './Header'
import Form from './Form'
import MovieList from './movies/MovieList'

const App = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <Header />
        <Form />
        {/* <MovieList /> */}
      </div>
    </React.Fragment>
  )
}

export default App