import React from 'react'
import {connect} from 'react-redux'

const Letter = props => {
  const {
    date,
    firstName,
    lastName,
    position,
    company,
    jobDuties,
    related,
    timeElapsed,
    ageAtCommit,
    serious,
    rehab,
    safetyIssues,
    email
  } = props
  return (
    <div>
      <div align="right">
        <h5>{date}</h5>
      </div>

      <br />
      <br />

      <p>To Whom it May Concern:</p>

      <p>
        My name is {firstName} {lastName} and I am writing this letter in
        regards to my candidacy for the {position} position at {company}. I am
        grateful for the opportunity to be considered for this role as I believe
        I can be a great asset to {company}. I understand that there may be some
        concerns from the results of my background check and I’d like to address
        each of them to show why I am still fit and very capable of handling the
        responsibilities of the position.
      </p>

      <p>
        <div>
          I believe I am a great fit for the {position} position. {jobDuties}
        </div>
      </p>

      <p>
        <div>
          I understand that there might be concerns about my fitness in this
          position given my history. However, the {position} position and its
          responsibilities do not intersect with the charge and will have no
          bearing on my ability to operate successfully. {related}
        </div>
      </p>

      <p>
        <div>
          Furthermore, I was in a very different state when the offense occured.{' '}
          {timeElapsed} {ageAtCommit}
        </div>
      </p>

      <p>
        <div>
          I know that a big objective of Article 23-A of The Fair Chance Act is
          to allow an opportunity to provide context around a conviction and
          allow the situation to be understood in its entirety. {serious}
        </div>
      </p>

      <p>
        <div>
          I have been working to move my life in a direction that I believe is
          more representative of who I am. {rehab} All of these factors
          demonstrate the growth I've experienced since the offense.
        </div>
      </p>

      <p>
        <div>
          I hope this letter has provided more clarity and insight into who I am
          and how I've grown as a person. {safetyIssues} I am confident that I
          will be a great {position} and that I can contribute to the overall
          success at {company}. Please don't hesitate to reach me at {email} if
          you have any further questions. Thank you again for taking the time to
          read this letter and allowing me the opportunity to show why I'd be a
          great addition to your team.
        </div>
      </p>

      <div align="left">
        Sincerely,
        <br />
        <br />
        {firstName} {lastName}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    date: state.user.date,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    company: state.user.company,
    position: state.user.position,
    jobDuties: state.user.jobDuties,
    related: state.user.related,
    timeElapsed: state.user.timeElapsed,
    ageAtCommit: state.user.ageAtCommit,
    serious: state.user.serious,
    rehab: state.user.rehab,
    safetyIssues: state.user.safetyIssues,
    email: state.user.email
  }
}

export default connect(mapState)(Letter)

// Letter.propTypes = {
//   date: PropTypes.string,
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   company: PropTypes.string,
//   position: PropTypes.integer,
//   email: PropTypes.string
// }
