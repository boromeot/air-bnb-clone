import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsPage from "./components/SpotsPage";
import HostFormPage from "./components/HostFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  //Need to take a look at how to render the nav bar
  //on all pages except the HostFormPage.
  //Current solution works but wonder if there is a
  //better way.
  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
            <NavLink to='/s/home'>spots</NavLink>
          </Route>
          <Route path='/s/home'>
            <Navigation isLoaded={isLoaded} />
            <SpotsPage />
          </Route>
          <Route path='/become-a-host'>
            <HostFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
