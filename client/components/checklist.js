import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Axios from 'axios';
import {updatedUser} from '../store'
import {Link} from 'react-router-dom'

class Checklist extends Component {
  constructor(props) {
    super(props)
    console.log('PROPS', props)
    this.state = {
      date: '',
      company: '',
      position: '',
      jobDuties: '',
      related: '',
      timeElapsed: '',
      ageAtCommit: '',
      serious: '',
      rehab: '',
      safetyIssue: '',
      isClicked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isClicked = this.isClicked.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  isClicked() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('clicked!')
    this.props.updatedUser(this.state)
    this.setState({
      date: '',
      company: '',
      position: '',
      jobDuties: '',
      related: '',
      timeElapsed: '',
      ageAtCommit: '',
      serious: '',
      rehab: '',
      safetyIssue: ''
    })
  }

  render() {
    return (
      <div className="checklist">
        <h1>Create Your Letter</h1>
        <h3>
          Please fill out each piece that is relevant to you. Remember- this is
          your chance to take ownership of your story. What will help your
          potential future employer understand why you are the best candidate
          for the position?
        </h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Today's Date</h4>
            <input
              type="text"
              name="date"
              placeholder="MONTH DAY, YEAR"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <h4>The company you are applying to:</h4>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>The position you are applying for:</h4>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
            />
            <br />
            <br />

            {/* <h4>Discuss how New York State ecourages the employment of persons with prior conviction.</h4>
            <input
              type="text"
              name="residency"
              placeholder="Are you a New York State resident?"
              value={this.state.residency}
              onChange={this.handleChange}
            />
            <br />
            <br /> */}

            <h4>
              Why are you qualified for the specific responsibilities of this
              position?
            </h4>
            <input
              type="text"
              name="related"
              placeholder="Why are you qualified for the specific responsibilities of this position?"
              value={this.state.related}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              How does your charge NOT affect your ability to be successful in
              this position?
            </h4>
            <input
              type="text"
              name="jobDuties"
              placeholder="Does your conviction relate to the job you are applying for?"
              value={this.state.jobDuties}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              How long ago did the offense happen? If the offense happened a
              while ago, be sure to state that explicitly! If the charge is more
              recent, skip this question.
            </h4>
            <input
              type="text"
              name="timeElapsed"
              placeholder="How long ago did the offense happen?"
              value={this.state.timeElapsed}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              If you were younger when the crime was committed, answer this
              question and discuss how you've changed since then.
            </h4>
            <input
              type="text"
              name="ageAtCommit"
              placeholder="How old were you when the crime was committed?"
              value={this.state.ageAtCommit}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              If the offense was nonviolent or not as serious, be sure to fill
              out this section to give more context. If you have a violent
              felony conviction, decide if it's helpful to talk about the
              details- it may be better to answer one of the other questions
              instead.
            </h4>
            <input
              type="text"
              name="serious"
              placeholder="How serious was the offense?"
              value={this.state.serious}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              What have you done since then? Discuss education, jobs,
              certifications, etc., to show your upward direction since the
              offense.
            </h4>
            <input
              type="text"
              name="rehab"
              placeholder="What have you done since then?"
              value={this.state.rehab}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              Will hiring you pose a danger to customers or other employees?
              This is a big one! Discuss why you would undoubtably be a benefit
              to the company.
            </h4>
            <input
              type="text"
              name="safetyIssue"
              placeholder="Will hiring you pose a danger to customers or other employees?"
              value={this.state.safetyIssue}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </div>
          Are you done? Submit Now!
          {this.state.isClicked ? (
            <Link to="/letter">
              <button type="submit">View your letter!</button>
            </Link>
          ) : (
            <div />
          )}
          {/* <Link to="/letter">
              <button type="submit">View Your Letter!</button>
            </Link> */}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  updatedUser: user => dispatch(updatedUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
