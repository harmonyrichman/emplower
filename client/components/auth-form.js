import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, authLog} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div className="auth">
      <form onSubmit={handleSubmit} name={name}>
        {displayName === 'Sign Up' ? (
          <div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input name="firstName" type="text" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input name="lastName" type="text" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input name="email" type="text" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        ) : (
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input name="email" type="text" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">{displayName}</button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        )}
      </form>
      <hr />
      {/* <div className="google"> */}
      <div className="google">
        <a href="/auth/google">{displayName} with Google</a>
      </div>
      {/* </div> */}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(authLog(email, password, formName))
    }
  }
}

const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(firstName, lastName, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
