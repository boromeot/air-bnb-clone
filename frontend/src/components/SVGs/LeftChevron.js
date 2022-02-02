import React from "react";

const LeftChevron = ({ className, viewBox }) => {
  return (
    <svg className={ className } viewBox={ viewBox }>
      <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
    </svg>
  )
}

export default LeftChevron;
