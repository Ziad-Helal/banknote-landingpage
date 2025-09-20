import { useEffect } from "react";
import { useFirstRender } from "./use-first-render";

export function useUpdateEffect(effect: () => void | (() => void | undefined), deps: ReadonlyArray<any>) {
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender) return effect();
  }, deps);
}
