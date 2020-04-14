import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <br />
      <br />

      <Link to="/fairchanceact">
        <h4 className="subtexter">
          <i>
            Fair and Equitable Hiring Practices for Justice Involved Communities{' '}
          </i>
        </h4>
        <br />
        <br />
        <div className="homepage">
          <h1 className="starting">Let's Get Started!</h1>
          <img src="https://static.thenounproject.com/png/57060-200.png" />
        </div>
      </Link>
    </div>
  )
}

export default HomePage

/*<Route path="/homepage" component={HomePage} /> */
