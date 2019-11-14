import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const MoreInfo = () => {
  return (
    <div className="moreinfo">
      {/* <hr /> */}
      <footer>
        <Link to="/moreinfo">
          <small>More Info</small>
        </Link>

        {/* <Link to="moreinfo">More Info</Link> */}
      </footer>
    </div>
  )
}

export default MoreInfo
