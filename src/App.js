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
import { categories } from './data/aftermarket'
import Tiles from './pages/tiles/';
import List from './pages/list/';
import Aftermarket from './pages/aftermarket';
import Profile from './pages/profile';
import Products from './components/products';
import { ProductDetails } from './components/productDetails';

function App() {
  const currentMode = (useLightSwitch() === Mode.Dark) ? true : false;
  const [dark, setDark] = useState(currentMode);
  useEffect(() => {
    setDark(() => { setDark(currentMode) })
  }, [currentMode])
  const listStyleDark = { ...{ backgroundColor: colors.secondaryDark, paddingTop: '56px' }, ...listBackground };
  const listStyleLight = { ...{ backgroundColor: colors.secondaryLight, paddingTop: '56px' }, ...listBackground };

  return (
    <div style={(dark) ? listStyleDark : listStyleLight}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/list">
              <List dark={dark}></List>
            </Route>
            <Route path="/aftermarket">
              <Aftermarket dark={dark}></Aftermarket>
            </Route>
            <Route path="/profile">
              <Profile dark={dark}></Profile>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;