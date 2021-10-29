import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Emoji = ({label, symbol}) => (
    <span
        className="emoji"
        role="img"
        aria-label={label}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;
