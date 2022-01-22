import React from "react";

const DownChevron = ({ className, viewBox }) => {
  return (
    <svg className={ className } viewBox={ viewBox }>
      <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
    </svg>
  )
}

export default DownChevron;
