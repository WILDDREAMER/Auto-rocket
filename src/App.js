import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import List from "../src/pages/list/"
import { Mode, useLightSwitch } from 'use-light-switch'
import {colors, listBackground} from "./data/list"
import Tiles from './pages/tiles/';

function App() {
  const [dark, setDark] = useState((useLightSwitch() === Mode.Dark) ? true : false);
  const listStyleDark = {...{backgroundColor:colors.secondaryDark}, ...listBackground};
  const listStyleLight = {...{backgroundColor:colors.secondaryLight}, ...listBackground};

  return (
    <div style={(dark) ? listStyleDark : listStyleLight}>
      <Tiles dark={dark}></Tiles>
    </div>
  );
}

export default App;