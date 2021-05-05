import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{fontSize: '30px', fontFamily: 'sans-serif'}}>
      <Link to="/" className="item" >
        Catalogulous
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