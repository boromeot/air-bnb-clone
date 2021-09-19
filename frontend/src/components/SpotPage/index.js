import { useEffect } from 'react';
import { useParams } from 'react-router';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Reservation from './Reservation';
import './SpotPage.css';

const SpotPage = () => {
  const { spotId } = useParams();
  const spot = useSelector(state => state.spot);
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [dispatch])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotActions.deleteSpot(spotId));
    history.push('/s/home');
  }

  return (
    <div className='spotpage-container'>
      <div className='spot-header'>
        <h1 className='spot-title'>{spot.name}</h1>
        <span>{`${spot.city}, ${spot.state}` }</span>
      </div>
      <div className='spot-image-container'>
        { spot.Images && spot.Images.map(({url}, i) => (
          <div className={`display-image pic-${i}`} style={{backgroundImage: `url(${url})`}}>

          </div>
        ))}
      </div>
      <div className='spot-content'>
        <div className='spot-host'>
          <h2>{spot.User && `Hosted by ${spot.User.username}`}</h2>
        </div>
        <div className='spot-info'>
          <div className='spot-description'>
            Description
          </div>
          {session && spot.id && <Reservation userId={session.user.id || null} spotId={spot.id} price={spot.price}/>}
        </div>
      </div>
      <button onClick={e => handleDelete(e)}>delete</button>
    </div>
  );
}

export default SpotPage;
