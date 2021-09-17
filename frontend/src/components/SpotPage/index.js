import { useEffect } from 'react';
import { useParams } from 'react-router';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';

const SpotPage = () => {
  const { spotId } = useParams();
  const spot = useSelector(state => state.spot);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spotActions.getSpot(spotId));
  }, [dispatch])

  return (
    <h1>{spot.name}</h1>
  );
}

export default SpotPage;
