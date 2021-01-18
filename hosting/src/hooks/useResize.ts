import { isIOS } from "react-device-detect";
import { useEffect } from "react";
import screenfull from "screenfull";

export enum Dim {
  WIDTH,
  HEIGHT,
  BOTH,
}

export type BothDims = {
  width: number;
  height: number;
};

// Note: the setTimeout is set because Safari on iPad (perhaps other browsers too)
// don't give the updated innerheight value (innerwidth too perhaps?) properly when fullscreening
// I guess it is because of the way fullscreen works? It's a Promise afaik.
const DELAY = isIOS ? 500 : 0;

// TODO: write tests
export function useResize(dim: Dim, callback: Function) {
  const resizeHandler = () => {
    if (dim === Dim.WIDTH) {
      setTimeout(() => callback(window.innerWidth), DELAY);
    } else if (dim === Dim.HEIGHT) {
      setTimeout(() => callback(window.innerHeight), DELAY);
    } else {
      setTimeout(
        () =>
          callback({ width: window.innerWidth, height: window.innerHeight }),
        DELAY
      );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    if (screenfull.isEnabled) {
      screenfull.on("change", resizeHandler);
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);

      if (screenfull.isEnabled) {
        screenfull.off("change", resizeHandler);
      }
    };
  });
}
