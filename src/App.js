import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

API=process.env.REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }
  changemode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "black";
      this.setState({
        mode: "dark",
      });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({
        mode: "light",
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar changemode={this.changemode} mode={this.state.mode} />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" api={this.API} mode={this.state.mode} category="general" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" api={this.API} mode={this.state.mode} category="sports" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" api={this.API} mode={this.state.mode} category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" api={this.API} mode={this.state.mode} category="entertainment" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" api={this.API} mode={this.state.mode} category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" api={this.API} mode={this.state.mode} category="science" />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" api={this.API} mode={this.state.mode} category="technology" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}