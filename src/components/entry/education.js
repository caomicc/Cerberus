import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Row from "./row"

const Education = ({ name, institution, duration, research }) => {
  return (
    <div className="entry">
      <div className="job">
        <h3>{name}</h3>
        <div className="indent">
          <Row label="institution">{institution}</Row>
          <Row label="duration">{duration}</Row>
          <Row label="research study">{research}</Row>
        </div>
      </div>
    </div>
  )
}
export default Education;
