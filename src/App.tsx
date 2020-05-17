import * as React from "react";
import { Provider } from "react-redux";
import Navigation from "./Navigation";
import store from "./Redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
