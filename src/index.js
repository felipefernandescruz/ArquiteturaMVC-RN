import React, { Component } from "react";
import Routes from "./route";
import { Provider } from "mobx-react/native";

export default class App extends Component<Props> {
  render() {
    return (
      <Provider>
        <Routes />
      </Provider>
    );
  }
}
