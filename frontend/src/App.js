import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Nav from "./components/Nav";
import SpotsPage from "./components/SpotsPage";
import SpotPage from "./components/SpotPage";
import HomePage from "./components/HomePage";
import ResevervationsPage from "./components/ReservationsPage";
import NewFormPage from "./components/NewFormPage/Index";

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
            <HomePage >
              <Nav />
            </HomePage>
          </Route>
          <Route path='/s/home'>
            <Nav />
            <SpotsPage />
          </Route>
          <Route path='/become-a-host'>
            <NewFormPage />
          </Route>
          <Route path='/spots/:spotId'>
            <Nav />
            <SpotPage />
          </Route>
          <Route path='/reservations'>
            <Nav />
            <ResevervationsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
