import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Row = ({label, children}) => (
    <p>
        <span className="title_attr">{label}</span> <span>{children}</span>
    </p>
);
export default Row;
