import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Amount from "./components/Amount/Amount";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";

const app = new Clarifai.App({
  apiKey: "ca9cdc7e743e4762b732c736861f1877",
});

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      box: {},
      route: "signIn",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    // console.log(clarifaiFace);
    const image = document.getElementById("InputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - clarifaiFace.bottom_row * height,
      rightCol: width - clarifaiFace.right_col * width,
    };
  };

  displayBox = (box) => {
    this.setState({ box: box });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayBox(this.calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    const { imgUrl, box, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Amount />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
