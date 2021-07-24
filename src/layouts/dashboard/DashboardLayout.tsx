import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBarOffset, SidebarWidth } from "../../static/constants";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

export default () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <DashboardNavbar
        onMobileNavOpen={() => {
          setMobileNavOpen(true);
        }}
      />

      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />

      <div className={classes.layoutWrapper}>
        <div className={classes.layoutContainer}>
          <div className={classes.layoutContent}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  layoutWrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: NavBarOffset,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: SidebarWidth,
    },
  },
  layoutContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  layoutContent: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));
