import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Article23a extends Component {
  constructor(props) {
    super(props)
    this.state = {
      factors: false,
      whatIs: false
    }
    this.showFactors = this.showFactors.bind(this)
    this.whatIs = this.whatIs.bind(this)
  }

  showFactors() {
    console.log('clicked!')
    this.setState(
      {
        factors: !this.state.factors
      },
      console.log('STTEA', this.state)
    )
  }

  whatIs() {
    console.log('clicked')
    this.setState({
      whatIs: !this.state.whatIs
    })
  }

  render() {
    return (
      <div className="article23">
        <h1>Article 23-A</h1>
        <h2
          onClick={() => {
            this.whatIs()
          }}
          className="whatIs"
        >
          What is it?
        </h2>
        {this.state.whatIs ? (
          <p>
            <h4>
              Article 23-A is the piece of the Fair Chance Act that prohibits an
              employer from unfairly discriminating against a person purely on
              the basis of criminal conviction. This law has 8 specific factors
              that employers must consider when evaluating a person with a prior
              conviction. This allows for case-by-case consideration, and
              ensures that no single factor should determine the entire hiring
              process.
            </h4>
          </p>
        ) : (
          <div />
        )}

        <h2
          onClick={() => {
            this.showFactors()
          }}
          className="factors"
        >
          The 8 Factors Are:
        </h2>

        {this.state.factors ? (
          <p>
            <ol>
              <li>
                New York State encourages the employment of persons with prior
                convictions.
                <h3>
                  Do you live in New York? Your state wants employers to provide
                  opportunities to residents who have criminal convictions
                </h3>
              </li>

              <li>
                The specific duties and responsibilities necessarily related to
                the license or employment sought.
                <h3>
                  What does the job actually entail? What are the day to day
                  responsibilities of the job? Does it require any special
                  skills?
                </h3>
              </li>

              <li>
                The bearing, if any, the criminal offense(s) for which the
                person was convicted will have on their ability to perform the
                job duties.
                <h3>
                  Does the job relate to the charge? Could the conviction make
                  you less suitable for that particlar job? For example, someone
                  with a gun charge would not be eligible for a security
                  position (without a Certificate of Relief). Or, someone
                  convicted of a burglary might not be suitable for a job as a
                  bank teller. Don't worry though- there are other jobs that
                  will be a good fit for you!
                </h3>
              </li>

              <li>
                The time that has elapsed since the occurance of the criminal
                offense(s).
                <h3>
                  How long has it been since the crime was committed? Remember-
                  this is different from when you might have received a
                  conviction. Showing that time has passed since the committed
                  crime creates space between the decision you made then and the
                  person you are now.
                </h3>
              </li>

              <li>
                The age of the person at the time of the occurance of the
                criminal offense(s).
                <h3>
                  How old were you when the crime was committed? It is
                  scientific fact that our brains are not fully developed as
                  adolescents, so being able to address how your decision making
                  skills and mentality has developed and matured since then is
                  key.
                </h3>
              </li>

              <li>
                The seriousness of the offense(s).
                <h3>
                  It is important that different charges are examined
                  differently. If you have a nonviolent conviction, or if there
                  is context to the charge that you think is appropriate for a
                  hiring mangager to know, then let them know. The
                  criminalization of poverty is very real- and the
                  responsibility of that is on the structure of our society.
                </h3>
              </li>

              <li>
                Any information produced by the person, or produced on behalf of
                the person, in regard to their rehabilitation and good conduct.
                <h3>
                  What have you done since then? This is an opportunity for you
                  to take control of your own story. What did you learn through
                  your experience? Did you go back to school or start/finish a
                  GED program? Did you receive any certifications (Food Handlers
                  License, OSHA tranings, apprenticeships) since the time of the
                  offense? This is your opportunity to show the upward direction
                  you are striving for, and that you are not interested in
                  making decisions that will push you backwards.
                </h3>
              </li>

              <li>
                The legitimate interest of the public agency or private employer
                in protecting property, and the safety and welfare of the
                general public.
                <h3>
                  Will hiring you put anyone at risk? This includes other
                  employees and customers. This is a big one! You want to
                  demonstrate that you will be a benefit to the company, and not
                  a risk.
                </h3>
              </li>
            </ol>
          </p>
        ) : (
          <div />
        )}
        <div className="articButton">
          <Link to="/checklist">
            <button type="button">Ready to Create Your Own Letter?</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Article23a
