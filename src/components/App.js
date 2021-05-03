import React from 'react'
import Header from './Header'
import Form from './Form'
import { Router, Route, Switch } from 'react-router-dom'
import MovieCreate from './movies/MovieCreate'
import MovieEdit from './movies/MovieEdit'
import MovieDelete from './movies/MovieDelete'
import MovieList from './movies/MovieList'

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={MovieList}></Route>
            <Route path="/movies/new" exact component={MovieCreate}></Route>
            <Route path="/movies/edit/:id" exact component={MovieEdit}></Route>
            <Route path="/movies/delete/:id" exact component={MovieDelete}></Route>
          </Switch>
          <Form />
          <MovieList />
        </div>
      </Router>
    </div>

  )
}

export default App