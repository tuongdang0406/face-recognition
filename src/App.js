import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Amount from "./components/Amount/Amount";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      value: 140,
    },
  },
};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Amount />
      <ImageLinkForm />
    </div>
  );
}

export default App;
