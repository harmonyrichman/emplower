import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <br />
      <br />

      <Link to="/fairchanceact">
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
