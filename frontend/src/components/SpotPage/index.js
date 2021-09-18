import { useEffect } from 'react';
import { useParams } from 'react-router';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from './Reservation';
import './SpotPage.css';
import { NavLink } from 'react-router-dom';

const SpotPage = () => {
  const { spotId } = useParams();
  const spot = useSelector(state => state.spot);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [dispatch])

  return (
    <div className='spotpage-container'>
      <div className='spot-header'>
        <h1>{spot.name}</h1>
        <span>{`${spot.city}, ${spot.state}` }</span>
      </div>
      <div className='image-container'>
        { spot.Images && spot.Images.map(({url}, i) => (
          <div className={`display-image pic-${i}`} style={{backgroundImage: `url(${url})`}}>

          </div>
        ))}
      </div>
      <div className='spot-content'>
        <div className='host'>
          <h2>{spot.User && `Hosted by ${spot.User.username}`}</h2>
        </div>
        {sessionUser.id && spot.id && <Reservation userId={sessionUser.id} spotId={spot.id} price={spot.price}/>}
        <div className='description'>
        </div>
      </div>
    </div>
  );
}

export default SpotPage;
