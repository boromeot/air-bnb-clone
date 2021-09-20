import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as spotActions from '../../store/spot';
import './EditForm.css';

const EditForm = ({ spot }) => {
  const [name, setName] = useState(spot.name);
  const [address, setAdress] = useState(spot.address);
  const [price, setPrice] = useState(spot.price);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [description, setDescription] = useState(spot.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpot = {...spot};
    newSpot.name = name;
    newSpot.address = address;
    newSpot.price = price;
    newSpot.city = city;
    newSpot.state = state;
    newSpot.description = description;
    dispatch(spotActions.putSpot(spot.id, newSpot));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <input type='text' value={address} onChange={e => setAdress(e.target.value)}/>
      <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
      <input type='text' value={price} onChange={e => setPrice(e.target.value)}/>
      <input type='text' value={city} onChange={e => setCity(e.target.value)}/>
      <input type='text' value={state} onChange={e => setState(e.target.value)}/>
      <button className='editform-submit' type='submit' />
    </form>
  )
}

export default EditForm;
