

import React from "react";

import { Provider } from "react-redux";

import store from "./store/store";

import Form from "./Form"
import List from "./List"

const App = () => {
  return (
    <Provider store={store}>
      <div >
        <Form />
        <p>elo</p>
        <List />

      </div>
    </Provider>

  );
}

export default App;
