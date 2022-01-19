import React from "react";

const Pool = ({ className, viewBox, transform }) => {
  return (
    <svg className={className} viewBox={viewBox} >
      <g transform={transform}>
        <path fill="#222222" fillOpacity="1" fillRule="nonzero" d="M42 41 C42,41 40,41 40,41 C40,41 40,35 40,35 C40,35 28,35 28,35 C28,35 28,33 28,33 C28,33 40,33 40,33 C40,33 40,31 40,31 C40,29.9 39.11,29 38.01,28.99 C36.96,28.99 36.08,29.8 36.01,30.85 C36.01,30.85 36,31 36,31 C36,31 34,31 34,31 C34,28.79 35.79,27 38,27 C39.15,27 40.24,27.49 41,28.36 C42.46,26.7 44.99,26.54 46.65,28 C47.45,28.71 47.94,29.72 48,30.8 C48,30.8 48,31 48,31 C48,31 48,33 48,33 C48,33 52,33 52,33 C52,33 52,35 52,35 C52,35 48,35 48,35 C48,35 48,41 48,41 C48,41 46,41 46,41 C46,41 46,39 46,39 C46,39 42,39 42,39 C42,39 42,41 42,41 C42,41 42,41 42,41z  M42 37 C42,37 46,37 46,37 C46,37 46,35 46,35 C46,35 42,35 42,35 C42,35 42,37 42,37z  M44 29 C42.95,29 42.08,29.81 42.01,30.85 C42.01,30.85 42,31 42,31 C42,31 42,33 42,33 C42,33 46,33 46,33 C46,33 46,31 46,31 C46,29.9 45.1,29 44,29z "></path>
        <path fill="#222222" fillOpacity="1" fillRule="nonzero" d="M52 53.5 C52,53.5 52,51.5 52,51.5 C51.51,51.51 51.04,51.33 50.67,51.01 C49.94,50.35 48.99,49.99 48,50 C47.01,50 46.06,50.35 45.33,51.01 C44.96,51.33 44.49,51.51 44,51.5 C43.51,51.51 43.04,51.33 42.67,51.01 C41.94,50.35 40.99,49.99 40,50 C39.01,50 38.06,50.35 37.33,51.01 C36.96,51.33 36.49,51.51 36,51.5 C35.51,51.51 35.04,51.33 34.67,51.01 C33.94,50.35 32.99,49.99 32,50 C31.01,50 30.06,50.35 29.33,51.01 C29.01,51.29 28.61,51.46 28.19,51.49 C28.19,51.49 28,51.5 28,51.5 C28,51.5 28,53.5 28,53.5 C28.99,53.5 29.95,53.15 30.67,52.49 C31.02,52.18 31.5,52 32,52 C32.5,52 32.98,52.18 33.33,52.49 C34.07,53.15 35.02,53.51 36,53.5 C36.99,53.5 37.95,53.15 38.67,52.49 C39.02,52.18 39.5,52 40,52 C40.5,52 40.98,52.18 41.33,52.49 C42.06,53.15 43.02,53.51 44,53.5 C44.99,53.5 45.95,53.15 46.67,52.49 C47.02,52.18 47.5,52 48,52 C48.5,52 48.98,52.18 49.33,52.49 C50.01,53.1 50.87,53.45 51.77,53.49 C51.77,53.49 52,53.5 52,53.5z "></path>
        <path fill="#222222" fillOpacity="1" fillRule="nonzero" d="M52 48.5 C52,48.5 52,46.5 52,46.5 C51.51,46.51 51.04,46.33 50.67,46.01 C49.94,45.35 48.99,44.99 48,45 C47.01,45 46.06,45.35 45.33,46.01 C44.96,46.33 44.49,46.51 44,46.5 C43.51,46.51 43.04,46.33 42.67,46.01 C41.94,45.35 40.99,44.99 40,45 C39.01,45 38.06,45.35 37.33,46.01 C36.96,46.33 36.49,46.51 36,46.5 C35.51,46.51 35.04,46.33 34.67,46.01 C33.94,45.35 32.99,44.99 32,45 C31.01,45 30.06,45.35 29.33,46.01 C29.01,46.29 28.61,46.46 28.19,46.49 C28.19,46.49 28,46.5 28,46.5 C28,46.5 28,48.5 28,48.5 C28.99,48.5 29.95,48.15 30.67,47.49 C31.02,47.18 31.5,47 32,47 C32.5,47 32.98,47.18 33.33,47.49 C34.07,48.15 35.02,48.51 36,48.5 C36.99,48.5 37.95,48.15 38.67,47.49 C39.02,47.18 39.5,47 40,47 C40.5,47 40.98,47.18 41.33,47.49 C42.06,48.15 43.02,48.51 44,48.5 C44.99,48.5 45.95,48.15 46.67,47.49 C47.02,47.18 47.5,47 48,47 C48.5,47 48.98,47.18 49.33,47.49 C50.01,48.1 50.87,48.45 51.77,48.49 C51.77,48.49 52,48.5 52,48.5z "></path>
        <path fill="#222222" fillOpacity="1" fillRule="nonzero" d="M52 43.5 C52,43.5 52,41.5 52,41.5 C51.51,41.51 51.04,41.33 50.67,41.01 C49.94,40.35 48.99,39.99 48,40 C47.01,40 46.06,40.35 45.33,41.01 C44.96,41.33 44.49,41.51 44,41.5 C43.51,41.51 43.04,41.33 42.67,41.01 C41.94,40.35 40.99,39.99 40,40 C39.01,40 38.06,40.35 37.33,41.01 C36.96,41.33 36.49,41.51 36,41.5 C35.51,41.51 35.04,41.33 34.67,41.01 C33.94,40.35 32.99,39.99 32,40 C31.01,40 30.06,40.35 29.33,41.01 C29.01,41.29 28.61,41.46 28.19,41.49 C28.19,41.49 28,41.5 28,41.5 C28,41.5 28,43.5 28,43.5 C28.99,43.5 29.95,43.15 30.67,42.49 C31.02,42.18 31.5,42 32,42 C32.5,42 32.98,42.18 33.33,42.49 C34.07,43.15 35.02,43.51 36,43.5 C36.99,43.5 37.95,43.15 38.67,42.49 C39.02,42.18 39.5,42 40,42 C40.5,42 40.98,42.18 41.33,42.49 C42.06,43.15 43.02,43.51 44,43.5 C44.99,43.5 45.95,43.15 46.67,42.49 C47.02,42.18 47.5,42 48,42 C48.5,42 48.98,42.18 49.33,42.49 C50.01,43.1 50.87,43.45 51.77,43.49 C51.77,43.49 52,43.5 52,43.5z "></path>
      </g>
    </svg>
  )
}

export default Pool;
