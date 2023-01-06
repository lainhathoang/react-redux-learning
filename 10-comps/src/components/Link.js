import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

// implement this component for wrap the url to use with navgiation context
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handlClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handlClick}>
      {children}
    </a>
  );
}

export default Link;
