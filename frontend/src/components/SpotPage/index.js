import { useEffect } from 'react';
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

const SpotPage = () => {
  const { spotId } = useParams();
  const spot = useSelector(state => state.spot);
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [dispatch, spotId])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotActions.deleteSpot(spotId));
    history.push('/s/home');
  }

  return (
    <>
      <div className='spotpage-spacer mb5'>
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
      </div>
      <div className='spotpage-spacer'> {/* spot image */}
        <SpotImages images={spot.Images} />
      </div>
      <div className='spotpage-spacer flex'> {/* spot info */}
        <div className='spot-info'>
          <div className='spot-info--section'>
            <SpotOverview type={spot.type} hostName={spot.User?.username} guests={spot.guests}
              bedrooms={spot.bedrooms}
              beds={spot.beds}
              bathrooms={spot.bathrooms}
            />
          </div>
          <div className='spot-info--section'>

          </div>
          <div className='spot-info--section'>
            {spot.description}
          </div>
        </div>
        <div className='spot-reservation'>
          {session.user && spot.id && <Reservation userId={session.user.id} spotId={spot.id} price={spot.price}/>}
        </div>
        {/* <div className='spot-host'>
          <div>
            <div className='mb1'>
              <h2>{spot.User && `${spot.type} hosted by ${spot.User.username}`}</h2>
            </div>
            <div className='soft-black'>
              <span>{`${spot.guests} ${plural(spot.guests, 'guest')}`}</span>
              <span> · </span>
              <span>{`${spot.bedrooms} ${plural(spot.bedrooms, 'bedroom')}`}</span>
              <span> · </span>
              <span>{`${spot.beds} ${plural(spot.beds, 'bed')}`}</span>
              <span> · </span>
              <span>{`${spot.bathrooms} ${plural(spot.bathrooms, 'bathroom')}`}</span>
            </div>
          </div>
        </div>
        {session.user && session.user.id === spot.userId ? <button onClick={e => handleDelete(e)}>delete</button> : null}
        <div className='spot-info'>
          <div className='spot-description'>
            {spot.description}
          </div>
          {session.user && spot.id && <Reservation userId={session.user.id} spotId={spot.id} price={spot.price}/>}
        </div> */}
      </div>
    </>
  );
}

export default SpotPage;
