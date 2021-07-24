import { useAuth0 } from "@auth0/auth0-react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router";

import routes from "./routes";
import { defaultTheme } from "./themes";

export default () => {
  const routing = useRoutes(routes);
  const { error, isLoading } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Toaster position="top-center" />
      {routing}
    </ThemeProvider>
  );
};
