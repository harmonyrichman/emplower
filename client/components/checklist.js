import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Axios from 'axios';
import {updatedUser} from '../store'

class Checklist extends Component {
  constructor(props) {
    super(props)
    console.log('PROPS', props)
    this.state = {
      company: '',
      position: '',
      residency: '',
      jobDuties: '',
      related: '',
      timeElapsed: '',
      ageAtCommit: '',
      serious: '',
      rehab: '',
      safetyIssue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('clicked!')
    this.props.updatedUser(this.state)
    console.log(
      'COMES BACK TO HANDLE SUBMIT AFTER THUNK-- IF THUNK IS SUCCESSFUL WILL SHOW DATA'
    )
    this.setState({
      company: '',
      position: '',
      residency: '',
      jobDuties: '',
      related: '',
      timeElapsed: '',
      ageAtCommit: '',
      serious: '',
      rehab: '',
      safetyIssue: ''
    })
    console.log('state', this.state)
    console.log('NEW STATE:', this.state)
    //this is what is happening: it's going to 'clicked' then going in to the thunk - the AXIOS CALL is messing it up- logs USER from axios then comes back to console log HEREEEE and NEW STATE (though this.set)
  }

  render() {
    //   console.log('RENDERED STATE', this.state)
    return (
      <div>
        <h1>Create Your Letter</h1>
        <h3>
          Please fill out each piece that is relevant to you. Remember- this is
          your chance to take ownership of your story. What will help your
          potential future employer understand why you are the best candidate
          for the position?
        </h3>

        <form onSubmit={this.handleSubmit}>
          <div>
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

            <h4>Are you a New York State resident?</h4>
            <input
              type="text"
              name="residency"
              placeholder="Discuss how New York State ecourages the employment of persons with prior conviction"
              value={this.state.residency}
              onChange={this.handleChange}
            />
            <br />
            <br />

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
              Does your conviction relate to the job you are applying for?
            </h4>
            <input
              type="text"
              name="jobDuties"
              placeholder="How does your charge NOT affect your ability to be successful in this position?"
              value={this.state.jobDuties}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>How long ago did the offense happen?</h4>
            <input
              type="text"
              name="timeElapsed"
              placeholder="If the offense happened a while ago, be sure to state that explicitly! If the charge is more recent, skip this question"
              value={this.state.timeElapsed}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>How old were you when the crime was committed?</h4>
            <input
              type="text"
              name="ageAtCommit"
              placeholder="If you were younger when the crime was committed, answer this question and discuss how you've changed since then"
              value={this.state.ageAtCommit}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>How serious was the offense?</h4>
            <input
              type="text"
              name="serious"
              placeholder="If the offense was nonviolent or not as serious, be sure to fill out this section to give more context. If you have a violent felony conviction, decide if it's helpful to talk about the details- it may be better to answer one of the other questions instead"
              value={this.state.serious}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>What have you done since then?</h4>
            <input
              type="text"
              name="rehab"
              placeholder="Talk about education, jobs, certifications, etc., to show your upward direction since the offense"
              value={this.state.rehab}
              onChange={this.handleChange}
            />
            <br />
            <br />

            <h4>
              Will hiring you pose a danger to customers or other employees?
            </h4>
            <input
              type="text"
              name="safetyIssue"
              placeholder="This is a big one! Discuss why you would undoubtably be a benefit to the company."
              value={this.state.safetyIssue}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </div>

          <div>
            <button type="submit">Are you done? Submit Now!</button>
          </div>
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
