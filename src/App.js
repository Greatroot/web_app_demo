import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import {cleanup} from "@testing-library/react";

// TODO: I'm currently planning on implementing the updateDimensions()
// functionality through useState and eventListener, but perhaps
// I can come back later and update it to be done through Redux.

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    this.updateDimensions = this.updateDimensions.bind(this);

    // Essentially ComponentDidMount()
    useEffect(() => {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        // Specify how to clean up after this effect:
        return function cleanup() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, []);

    const topBarCollapsed = windowWidth < 1100;

  return (
    <div>
      <HeaderBar styles={styles} />
      <Content styles={styles}/>
      <FooterBar />
    </div>
  );
}

// Accepts the method to update state and uses it to update state.
const updateDimensions = (setWindowWidth) => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    setWindowWidth(windowWidth);
}

const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerBarHeight: 50,
};

const menuItems = [
    {text: "Home"},
    {text: "Map Gallery"},
    {text: "Special Interest Projects"},
    {text: "About Us"},
    {text: "Download Data"},
];

export default App;
