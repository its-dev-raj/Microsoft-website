import React from "react";
// import Button from "./pages/Button";
import Navbar from "./pages/Navbar";

import Main from "./pages/Main";
import Slid from "./pages/Slid";
import Maximise from "./pages/Maximise";
import Heading from "./pages/Heading";
import Business from "./pages/Business";
import Follow from "./pages/Follow";
import Bottom from "./pages/Bottom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Slid />
      <Main />
      <Maximise />
      <Heading />
      <Business />
      <Follow />
      <Bottom />
    </div>
  );
};

export default App;
