import React from "react";
import ReactDOM from "react-dom";

import { Font } from '@react-pdf/renderer'

import { fontFamily } from "./helpers/constants";
import Main from "./pages/Main";


Font.register({
  family: fontFamily.sansSerif,
  src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2'
});

ReactDOM.render(<Main />, document.getElementById("root"));
