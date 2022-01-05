import React, { useEffect, useState } from "react";
import Minus from "../../SVGs/Minus";
import Plus from "../../SVGs/Plus";

const PriceSection = ({ setFormData, formPrice }) => {

  const [price, setPrice] = useState(formPrice);

  const isNumeric = val => {
    return /^-?\d+$/.test(val);
  }

  const handleChange = e => {
    e.preventDefault();
    if (e.target.value === '' || isNumeric(e.target.value)) {
      setPrice(+e.target.value);
    }
  }

  const decrement = e => {
    e.preventDefault();
    if (formPrice >= 5) {
      setPrice(prevPrice => prevPrice - 5);
    }
  }

  const increment = e => {
    e.preventDefault();
    setPrice(prevPrice => prevPrice + 5);
  }

  useEffect(() => {
    setFormData(prevState => {
      return {
        ...prevState,
        price
      }
    })
  }, [price, setFormData]);

  return (
    <div id="FMP-target" className="flex flex-column m-auto align-center justify-center" style={{maxWidth: '500px'}}>
      <div className="flex flex-column align-center justify-center">
        <div className="inline-flex align-center">
          <button className='flex btn-minus align-center justify-center' style={{flexShrink: '0', height: '48px', width: '48px'}}
            onClick={decrement}
          >
            <Minus className='icon-12' viewBox='0 0 32 32' />
          </button>
          <div className="mz--8 text-center">
            <div className="mz--32 flex radius-8 box-shadow-gray">
              <input
                className="soft-black w100p font-size--48 font-weight--600 text-center no-focus"
                placeholder="$00"
                style={{margin: '8px 12px', border: 'medium'}}
                pattern="[0-9]+"
                value={price}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="flex btn-plus align-center justify-center" style={{flexShrink: '0', height: '48px', width: '48px'}}
            onClick={increment}
          >
            <Plus className='icon-12' viewBox='0 0 32 32' />
          </button>
        </div>
        <div className="pt2">per night</div>
      </div>
    </div>
  )
}

export default PriceSection;
