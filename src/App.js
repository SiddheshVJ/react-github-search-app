import React from "react";
import GithubSearchApp from "./components/GithubSearchApp";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <GithubSearchApp />
      </>
    )
  }
}

export default App;