import React from "react";
import { CounterProvider } from "../components/organisms/Counter";
import CounterView from "../components/views/CounterView";

const HomePage = () => {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
};

export default HomePage;
