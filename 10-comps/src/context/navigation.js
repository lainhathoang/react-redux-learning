import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      // get the address name in address bar
      setCurrentPath(window.location.pathname);
    };
    // add for each component
    window.addEventListener("popstate", handler);

    // clean this event popState when user takes a full reload of this page
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // navigate the pages without taking a full page refresh
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
