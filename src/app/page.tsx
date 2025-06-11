"use client";
import Home from "./pages/Home/page";

import { Provider } from "react-redux";
import store from "../store/store";

const HomePage = () => {
  return (
    <>
      <Provider store={store}>
        <Home />;
      </Provider>
    </>
  );
};

export default HomePage;
