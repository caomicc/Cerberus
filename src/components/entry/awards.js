import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Row from "./row"

const Awards = ({ name, date, issuer, certificate }) => {
  return (
    <div className="entry">
      <div className="job">
        <h3>{name}</h3>
        <div className="indent">
          <Row label="issue date">{date}</Row>
          <Row label="issuer">{issuer}</Row>
          <Row label="certificate">{certificate}</Row>
        </div>
      </div>
    </div>
  )
}
export default Awards;
