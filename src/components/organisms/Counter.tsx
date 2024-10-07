import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import useDebounce from "@/utils/debounce";
import ButtonText from "../molecules/ButtonText";
import Text from "../atoms/Text";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

type CounterProviderProps = {
  children: ReactNode;
};

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export default function Counter({
  count,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div className="counter">
      <Text text={count} />
      <ButtonText
        label="Increment"
        onClick={onIncrement}
        buttonClass="counter__button"
      />
      <ButtonText
        label="Decrement"
        onClick={onDecrement}
        buttonClass="counter__button"
      />
    </div>
  );
}

function CounterProvider({ children }: CounterProviderProps) {
  const [countInternal, setCountInternal] = useState(0);

  const debouncedCountValue = useDebounce(countInternal, 500);
  const count = useMemo(() => {
    return debouncedCountValue;
  }, [debouncedCountValue]);

  const increment = useCallback(() => {
    setCountInternal((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCountInternal((prevCount) => prevCount - 1);
  }, []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("App context must be used within the provider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
