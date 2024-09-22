import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import useDebounce from "@/utils/debounce";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

type CounterProviderProps = {
  children: ReactNode;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);
  const [countInternal, setCountInternal] = useState(0);

  const debouncedCountValue = useDebounce(countInternal, 500);

  useEffect(() => {
    if (debouncedCountValue) {
      setCount(debouncedCountValue);
    } else {
      setCount(0);
    }
  }, [debouncedCountValue]);

  const increment = () => setCountInternal((prevCount) => prevCount + 1);
  const decrement = () => setCountInternal((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within the Counter Provider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
