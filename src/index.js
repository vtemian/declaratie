import React from "react";
import ReactDOM from "react-dom";
import { Font } from '@react-pdf/renderer';

import {fontFamily} from "./helpers/constants";

import Main from "./pages/Main";
import font from "./static/roboto.ttf"

Font.register({
  family: fontFamily.sansSerif,
  src: font,
});

ReactDOM.render(<Main />, document.getElementById("root"));
