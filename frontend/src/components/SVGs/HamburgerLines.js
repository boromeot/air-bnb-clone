import React from "react";

const HamburgerLines = ({ className, viewBox }) => {
  return (
    <svg className={ className } viewBox={ viewBox }>
      <g>
        <path d="m2 16h28"></path>
        <path d="m2 24h28"></path>
        <path d="m2 8h28"></path>
      </g>
    </svg>
  )
}

export default HamburgerLines;
