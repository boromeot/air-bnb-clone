import React, { useState, useEffect } from "react";

//This is not scalable at all and I know this,
//But this is what I came up with. I am running out of time
//I really don't like the way this came out
const UrlOption = ({ payload, setValue}) => {
  const [payloadObj, setPayloadObj] = useState({});
  const [formValue, setFormValue ] = useState('');
  const [formValue1, setFormValue1 ] = useState('');
  const [formValue2, setFormValue2 ] = useState('');
  const placeholder = 'Enter the image url';

  const handleChange = (e, setFunc) => {
    setFunc(e.target.value);
  }

  const handleUpdate = (index, val) => {
    const newPayloadObj = {...payloadObj};
    newPayloadObj[index] = val;
    setPayloadObj(newPayloadObj);
  };

  //Took a long time to figure out I needed to use multiple use effects
  useEffect(() => {
    handleUpdate(0, formValue);
  }, [formValue])

  useEffect(() => {
    handleUpdate(1, formValue1);
  }, [formValue1])

  useEffect(() => {
    handleUpdate(2, formValue2);
  }, [formValue2])

  useEffect(() => {
    payload.value = payloadObj;
    setValue(JSON.stringify(payload));
  }, [payloadObj])

  return (
    <>
      <input type='text' value={formValue} onChange={e => handleChange(e, setFormValue)} placeholder={placeholder}/>
      <input type='text' value={formValue1} onChange={e => handleChange(e, setFormValue1)} placeholder={placeholder}/>
      <input type='text' value={formValue2} onChange={e => handleChange(e, setFormValue2)} placeholder={placeholder}/>
    </>
  )
}

export default UrlOption;
