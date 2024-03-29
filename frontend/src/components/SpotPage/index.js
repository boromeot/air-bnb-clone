import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Reservation from './Reservation';
// import { Modal } from '../../context/Modal';
// import EditForm from './EditForm';
import './SpotPage.css';
import Star from '../SVGs/Star';
import SpotImages from './SpotImages';
import SpotOverview from './SpotOverview';
import SpotHighlights from './SpotHighlights';
import SpotAmenities from './SpotAmenities';

const SpotPage = () => {
  const { spotId } = useParams();
  const spot = useSelector(state => state.spot);
  const session = useSelector(state => state.session);
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
    setIsLoaded(true);
  }, [dispatch, spotId])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotActions.deleteSpot(spotId));
    history.push('/s/home');
  }
  console.log(handleDelete);

  return (
    <>
      {isLoaded && (<><div className='spotpage-spacer mb5'>
        <div className='pt4'>
          <div className='mb1'>
            <span className=''>
              <h1 className='font-size--26 font-weight--600'>{spot.title}</h1>
            </span>
          </div>
          <div className='flex align-flex-end justify-space-between '>
            <div className='flex'>
              <span className='inline-flex align-center'>
                <span className='mr1'><Star className='icon-14 fill-red' viewBox='0 0 32 32' /></span>
                <span className='mr1 font-size--14 font-weight--600 soft-black'>4.85 ·</span>
                <span className='mr1 font-size--14 font-weight--600 soft-black underline'>440 reviews</span>
              </span>
              <span className='mr1 soft-gray'>·</span>
              <span className='inline-flex align-center'>
                <span className='mr1 soft-gray font-size--14'>Superhost</span>
              </span>
              <span className='mr1 soft-gray'>·</span>
              <span className='inline-flex align-center'>
                <span className='font-size--14 font-weight--500 soft-gray underline'>{`${spot.city},${spot.state},United States`}</span>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div><div className='spotpage-spacer'> {/* spot image */}
          <SpotImages images={spot.Images} />
        </div><div className='spotpage-spacer flex'> {/* spot info */}
          <div className='spot-info'>
            <div className='spot-info--section'>
              <SpotOverview type={spot.type} hostName={spot.User?.username} guests={spot.guests}
                bedrooms={spot.bedrooms}
                beds={spot.beds}
                bathrooms={spot.bathrooms} />
            </div>
            <div className='spot-info--section'>
              <SpotHighlights space={spot.space} type={spot.type} />
            </div>
            <div className='spot-info--section'>
              {spot.description}
            </div>
            <div className='spot-info--section'>
              <SpotAmenities amenities={spot?.Amenities} />
            </div>
          </div>
          <div className='spot-reservation'>
            {session.user && spot.id && <Reservation userId={session.user.id} spotId={spot.id} price={spot.price} />}
          </div>
        </div></>)}
    </>
  );
}

export default SpotPage;
