import React, { useState } from "react";

const TextOption = ({payload, setValue, placeholder}) => {
  const [formValue, setFormValue ] = useState('');

  const handleChange = (e) => {
    setFormValue(e.target.value);
    payload.value = e.target.value;
    setValue(JSON.stringify(payload));
  }

  return (
    <textarea value={formValue} onChange={handleChange} placeholder={placeholder}/>
  )
}

export default TextOption;
