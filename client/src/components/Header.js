import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Allmoxy
    </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Movies
      </Link>
      </div>
    </div>

  )
}

export default Header