import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Mode, useLightSwitch } from 'use-light-switch'
import { colors, listBackground } from "./data/list"
import Tiles from './pages/tiles/';
import List from './pages/list/';
import Aftermarket from './pages/aftermarket';
import Products from './components/products';

function App() {
  const currentMode = (useLightSwitch() === Mode.Dark) ? true : false;
  const [dark, setDark] = useState(currentMode);
  useEffect(() => {
    setDark(() => {setDark(currentMode)})
  }, [currentMode])
  const listStyleDark = { ...{ backgroundColor: colors.secondaryDark }, ...listBackground };
  const listStyleLight = { ...{ backgroundColor: colors.secondaryLight }, ...listBackground };

  return (
    <div style={(dark) ? listStyleDark : listStyleLight}>
        <div>
            <BrowserRouter>
              <Switch>
                  <Route path="/list">
                    <List dark={dark}></List>
                  </Route>
                  <Route path="/tiles">
                    <Tiles dark={dark}></Tiles>
                  </Route>
                  <Route path="/aftermarket">
                    <Aftermarket dark={dark}></Aftermarket>
                  </Route>
              </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;