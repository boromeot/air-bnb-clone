import ProfileButton from "./ProfileButton";
import { useSelector } from 'react-redux';

const Navigation = () => {
  const session = useSelector(state => state.session.user);

  if (session) {
    return <ProfileButton />
  }

  return (
    null
  );
}

export default Navigation;
