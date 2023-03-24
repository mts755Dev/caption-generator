import React from "react";
import CaptionGenerator from "./components/CaptionGenerator";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CaptionGenerator />
      <Footer />
    </div>
  );
};

export default App;
