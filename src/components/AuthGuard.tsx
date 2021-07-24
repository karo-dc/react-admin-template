import { useAuth0 } from "@auth0/auth0-react";
import { To } from "history";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

import type { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

export default (props: IProps) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<To | null>(null);

  if (!isAuthenticated && !isLoading) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <LoginPage />;
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{props.children}</>;
};
