import React from 'react'
import Link from 'react-router-dom'

const Employer = () => {
  return (
    <div>
      <h1>After Your Interview, Has the Employer...</h1>
      <ol>
        <li>
          Given you a copy of any background checks it did on you?
          <h4>
            Remember- make sure you read the background checks; they can be
            faulty! Make sure the conviction(s) and information around the
            conviction(s) is correct. Youthful Offender (YO) charges should not
            show up!
          </h4>
        </li>

        <li>
          Share a written evaulation with you that addresses specific factors
          from Article 23-A?
          <h4>
            Employers need to send you a letter that addresses each factor from
            Article 23-A that they believe is a cause for concern if they were
            to hire you. When you send back your response letter, make sure
            you've addressed every point they've brought up! It's important to
            have a counterargument that shows why their concern shouldn't be a
            concern.
          </h4>
        </li>

        <li>
          Given you at least 3 business days to let you respond?
          <h4>
            Some employers may give you a full week, but legally speaking they
            are only obligated to give you three business days. If you know you
            have a conviction that will appear on a background check, get
            started with this process early! Use the Emplower letter generator
            to have your response ready to send out.
          </h4>
        </li>
      </ol>
      <div>
        {/* <NextSteps /> */}
        <Link to="/nextsteps">
          <div>
            <button type="button">
              If you think your rights have been violated
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Employer
