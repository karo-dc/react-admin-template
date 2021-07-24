import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NProgress from "nprogress";
import { useEffect } from "react";

import { Colors } from "../assets/colors";

export default () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      className={classes.root}
      sx={{
        backgroundColor: "background.paper",
        minHeight: "100%",
      }}
    />
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: Colors.White,
    minHeight: "100%",
  },
}));
