import React from "react";

const Reservation = ({ price }) => {
  const handleSubmit = () => {
    
  }

  return (
    <div className='reservation-form'>
      <div className='form'>
        <div>
          <span>{`$${price} / night`}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input />
          <input />
          <input />
          <button className='submit-btn' type='submit' >
            Reserve
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reservation;
