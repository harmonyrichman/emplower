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
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
      <div>
        <Link to="/checklist">
          <h4>Start Your Own Letter Now!</h4>
        </Link>
      </div>

      <div>
        <Link to="/letter">
          <h4>View Your Letter</h4>
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
