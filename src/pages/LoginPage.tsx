import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Login | DC Admin</title>
      </Helmet>
      <div>Login</div>
    </>
  );
};
