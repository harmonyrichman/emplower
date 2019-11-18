import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, email} = props

  return (
    <div className="userHome">
      <h1>
        Welcome back, {firstName} {lastName}!
      </h1>
      <br />
      <br />

      <div id="boxes">
        <Link to="/fairchanceact">
          <h3>Explore!</h3>
        </Link>
        <Link to="/checklist">
          <h3>Create A New Letter</h3>
        </Link>

        <Link to="/letter">
          <h3>View Your Letter</h3>
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
}
