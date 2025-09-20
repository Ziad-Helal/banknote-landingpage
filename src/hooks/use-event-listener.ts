import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useEventListener(eventName: string, handler: (e: Event) => any, element?: RefObject<any>) {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current || window;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    const eventListener = (event: Event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
