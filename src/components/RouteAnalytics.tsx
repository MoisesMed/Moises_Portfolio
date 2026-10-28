import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export default function RouteAnalytics() {
  const location = useLocation();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      ReactGA.initialize("G-BB7PQZKY80");
      hasInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (hasInitialized.current) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  return null;
}
