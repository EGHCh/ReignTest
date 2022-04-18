import React, { useEffect, useRef, useState } from "react";

export function useObserverHook(options) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);
  const observer = useRef(new IntersectionObserver((observedEntries) => {
    setEntries(observedEntries)
    console.log(observedEntries)
  }, options));
  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();
    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element))
    }
    return function cleanup() {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    }
  }, [elements])
  return [observer.current, setElements, entries]
}
