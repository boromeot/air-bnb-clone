import React, { useEffect, useState } from "react";
import Minus from '../../SVGs/Minus';
import Plus from '../../SVGs/Plus';

const GuestOption = ({ x, formData, setFormData })  => {

  const [count, setCount] = useState(formData[x.toLowerCase()]);

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    setFormData(prevState => {
      return {...prevState, [x.toLowerCase()]: count}
    });
  }, [count])

  return (
    <div className="py--8 w100p">
      <div className="py2-5 ">
        <div className="flex">
          <div className="flex flex-column justify-center w100p flex-1-1-auto">
            <div className="">
              <div className="font-size--26 font-weight--600 soft-black">
                {x}
              </div>
            </div>
          </div>
          <div className="ml--16">
            <div className="flex align-center justify-space-between" style={{height: '34px', width: '104px'}}>
              <button className="btn btn-minus flex align-center justify-center"
                onClick={decrement}
              >
                <Minus className='icon-12' viewBox='0 0 30 30'/>
              </button>
              <div>
                <span>{count}</span>
              </div>
              <button className="btn btn-plus flex align-center justify-center"
                onClick={increment}
              >
                <Plus className='icon-12' viewBox='0 0 30 30'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestOption;
