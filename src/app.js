import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Routes from "./Routes";
import ConvenientToTypeNavigationComponent from "./ConvenientToTypeNavigationComponent";

const themeObject = {
  lemon: {
    mainColor: "yellow",
    bannerColor: "yellow",
    textColor: "black"
  },
  melon: {
    mainColor: "pink",
    bannerColor: "green",
    textColor: "pink"
  }
};

const App = () => {
  console.log("no breaky?");
  return (
    <div>
      <ConvenientToTypeNavigationComponent themeObject={themeObject.melon} />
      <Routes />
    </div>
  );
};

export default App;
