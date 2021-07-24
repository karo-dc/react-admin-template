import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from "react-helmet-async";

export default () => {
  const { logout } = useAuth0();

  return (
    <>
      <Helmet>
        <title>Dashboard | DC Admin</title>
      </Helmet>
      <div
        onClick={() => {
          logout();
        }}
      >
        Dashboard
      </div>
    </>
  );
};
