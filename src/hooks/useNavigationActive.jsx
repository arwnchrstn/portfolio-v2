import { useEffect, useRef, useContext, useMemo, useCallback } from "react";
import { NavContext } from "../context/NavContext";

const useNavigationActive = (ref, dispatchType) => {
  const { dispatch } = useContext(NavContext);
  const observerRef = useRef(null);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.31
    };
  }, []);

  const callbackFunction = useCallback((entries) => {
    const [entry] = entries;
    dispatch({ type: dispatchType, payload: entry.isIntersecting });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callbackFunction, options);
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);
};

export default useNavigationActive;
