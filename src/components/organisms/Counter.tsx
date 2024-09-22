import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface CounterProviderProps {
  children: ReactNode;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within the Counter Provider");
  }
  return context;
};

export { CounterProvider, useCounterContext };
