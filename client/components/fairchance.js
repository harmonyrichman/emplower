import React from 'react'
import {Link} from 'react-router-dom'
const FairChance = () => {
  return (
    <div className="fairchance">
      <h1>The Fair Chance Act</h1>
      <p>
        <h2 className="topic">What Is It?</h2>
        <h4 className="info">
          The Fair Chance Act, also known as 'Ban The Box', is a law that was
          enacted in October 2015 in NYC. It requires that employers wait until
          after a conditional offer of employment before asking about a criminal
          record. Only after a conditional offer can an employer ask about any
          criminal convictions or run a background check.
        </h4>
      </p>
      <p>
        <h2 className="topic">Why Is It Important?</h2>
        <h4 className="info">
          It provides an oppotunity for all applicants to be evaluated on who
          they are, and not just based off of previous actions that do not
          holistically represent their person. It allows hardworking people who
          are motivated to work to be given a fair shot to empower themselves,
          their families, and their communities. Just as importantly, it works
          to fight stigmatization against those whose lives have been affected
          by our contry's justice system and puts each of us in charge of our
          own story.
        </h4>
      </p>
      <p>
        <h2 className="topic">Know Your Rights!</h2>
        <h4 className="info">
          Have you ever been convicted of a misdeamenor or felony? Respond NO
          if:
        </h4>
        <ul>
          <li>
            If your conviction was sealed, expunged, or reversed on appeal,
          </li>
          <li>
            If your conviction was for a violation, infraction, or other petty
            offense such as "disorderly conduct"
          </li>
          <li>You receieved Youthful Offender (YO) status</li>
          <li>
            You withdrew your plea after completing a court-appointed program
          </li>
        </ul>
        <h4>
          You do NOT need to report any of the above- it is your own private
          information.
        </h4>
        <Link to="/article23a">
          <button type="button">Know Your Rights!</button>
        </Link>
      </p>
    </div>
  )
}

export default FairChance
