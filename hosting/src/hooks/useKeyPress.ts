import { useEffect } from "react";

// TODO: write tests
export function useKeyPress(targetKey: string, callback: Function) {
  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      callback(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });
}
