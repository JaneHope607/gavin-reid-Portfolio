import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">Gavin Reid - Scottish Artist</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">Work</Link>
          <Link to="/about">Shop</Link>
          <Link to="/about">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
