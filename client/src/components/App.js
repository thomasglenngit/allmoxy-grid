import React from 'react'
import Form from './Form'
import Header from './Header'
import { Router, Route, Switch } from 'react-router-dom'
import MovieCreate from './movies/MovieCreate'
import MovieEdit from './movies/MovieEdit'
import MovieDelete from './movies/MovieDelete'
import MovieList from './movies/MovieList'
import history from '../history'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Form />
          <Switch>
            <Route path="/" exact component={MovieList}></Route>
            <Route path="/movies/new" exact component={MovieCreate}></Route>
            <Route path="/movies/edit/:id" exact component={MovieEdit}></Route>
            <Route path="/movies/delete/:id" exact component={MovieDelete}></Route>
          </Switch>
          {/* <MovieList /> */}
        </div>
      </Router>
    </div>
  )
}

export default App