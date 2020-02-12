import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class FairChance extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFairClicked: false,
      isImportantClicked: false,
      isRightsClicked: false
    }
    this.isFairClick = this.isFairClick.bind(this)
    this.isImportantClick = this.isImportantClick.bind(this)
    this.isRightsClick = this.isRightsClick.bind(this)
  }

  isFairClick() {
    console.log('clicked!')
    this.setState({
      isFairClicked: !this.state.isFairClicked
    })
    // console.log('this.state==>', this.state)
  }

  isImportantClick() {
    console.log('clicked!')
    this.setState({
      isImportantClicked: !this.state.isImportantClicked
    })
    // console.log('this.state==>', this.state)
  }

  isRightsClick() {
    console.log('clicked!')
    this.setState({
      isRightsClicked: !this.state.isRightsClicked
    })
    // console.log('this.state==>', this.state)
  }

  render() {
    return (
      <div className="fairchance">
        <h1>The Fair Chance Act</h1>
        <h2
          className="topic"
          onClick={() => {
            this.isFairClick()
          }}
        >
          What Is It?
        </h2>

        {this.state.isFairClicked ? (
          <p>
            <h4 className="info">
              The Fair Chance Act, also known as 'Ban The Box', is a law that
              was enacted in October 2015 in NYC. It requires that employers
              wait until after a conditional offer of employment before asking
              about a criminal record. Only after a conditional offer can an
              employer ask about any criminal convictions or run a background
              check.
            </h4>
          </p>
        ) : (
          <div />
        )}

        <h2
          className="topic"
          onClick={() => {
            this.isImportantClick()
          }}
        >
          Why Is It Important?
        </h2>

        {this.state.isImportantClicked ? (
          <p>
            <h4 className="info">
              It provides an oppotunity for all applicants to be evaluated on
              who they are, and not just based off of previous actions that do
              not holistically represent their person. It allows hardworking
              people who are motivated to work to be given a fair shot to
              empower themselves, their families, and their communities. Just as
              importantly, it works to fight stigmatization against those whose
              lives have been affected by our contry's justice system and puts
              each of us in charge of our own story.
            </h4>
          </p>
        ) : (
          <div />
        )}

        <div>
          <h2
            className="topic"
            onClick={() => {
              this.isRightsClick()
            }}
          >
            Know Your Rights!
          </h2>

          {this.state.isRightsClicked ? (
            <div>
              <h4 className="info">
                Have you ever been convicted of a misdeamenor or felony? Respond
                NO if:
              </h4>
              <ul>
                <li>
                  If your conviction was sealed, expunged, or reversed on
                  appeal,
                </li>
                <li>
                  If your conviction was for a violation, infraction, or other
                  petty offense such as "disorderly conduct"
                </li>
                <li>You receieved Youthful Offender (YO) status</li>
                <li>
                  You withdrew your plea after completing a court-appointed
                  program
                </li>
              </ul>
              <h4>
                You do NOT need to report any of the above- it is your own
                private information.
              </h4>
            </div>
          ) : (
            <div />
          )}
          <div className="fairButton">
            <Link to="/article23a">
              <button type="button">
                <strong>Learn More!</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FairChance
