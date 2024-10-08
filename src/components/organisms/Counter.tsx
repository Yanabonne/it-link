import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useCallback,
  memo,
  ButtonHTMLAttributes,
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

type ButtonTextProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CounterContext = createContext<CounterContextType | undefined>(undefined);

const ButtonTextMemo = memo(function (props: ButtonTextProps) {
  return (
    <ButtonText onClick={props?.onClick} className="counter__button">
      {props.children}
    </ButtonText>
  );
});

export default function Counter({
  count,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div className="counter">
      <Text>{count}</Text>
      <ButtonTextMemo onClick={onIncrement}>Increment</ButtonTextMemo>
      <ButtonTextMemo onClick={onDecrement}>Decrement</ButtonTextMemo>
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
