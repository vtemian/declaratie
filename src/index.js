import React from "react";
import ReactDOM from "react-dom";
import { Font } from "@react-pdf/renderer";

import { fontFamily } from "./helpers/constants";

import Main from "./pages/Main";

import sansSerif from "./static/Roboto-Regular.ttf";
import sansSerifCondensed from "./static/Roboto-Condensed.ttf";

Font.register({
  src: sansSerif,
  family: fontFamily.sansSerif,
});

Font.register({
  src: sansSerifCondensed,
  family: fontFamily.sansSerifCondensed,
});

ReactDOM.render(<Main />, document.getElementById("root"));
