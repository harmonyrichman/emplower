import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <hr />
      <div className="homepage">
        <Link to="/fairchanceact">
          <h1>Let's Get Started!</h1>
        </Link>
        <img src="https://static.thenounproject.com/png/57060-200.png" />
      </div>
    </div>
  )
}

export default HomePage

/*<Route path="/homepage" component={HomePage} /> */
