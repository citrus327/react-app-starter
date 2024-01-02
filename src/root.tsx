import { FC } from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

const Root: FC = () => {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Link to="/">home </Link>
        <Link to="/count">count </Link>
      </header>

      <div>{navigation.state}</div>

      <Outlet />
    </div>
  );
};

export default Root;
