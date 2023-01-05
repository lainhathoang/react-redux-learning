import { useContext } from "react";
import NavigationContext from "../context/navigation";

// implement this component for wrap the url to use with navgiation context
function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handlClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handlClick}>{children}</a>;
}

export default Link;
