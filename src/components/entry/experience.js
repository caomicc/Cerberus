import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Row from "./row"

const Experience = ({ name, employer, description, duration, location }) => {
  return (
    <div className="entry">
      <div className="job">
        <h3>{name}</h3>
        <div className="indent">
          <Row label="employer">{employer}</Row>
          <Row label="description">{description}</Row>
          <Row label="duration">{duration}</Row>
          <Row label="location">{location}</Row>
        </div>
      </div>
    </div>
  )
}

export default Experience;
