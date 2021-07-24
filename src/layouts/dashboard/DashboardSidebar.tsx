import {
  Box,
  Divider,
  Drawer,
  Hidden,
  Theme,
  Typography,
} from "@material-ui/core";
import { Dashboard, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { ISidebarItem } from "../../../@types/misc";
import Logo from "../../components/Logo";
import { NavBarOffset, SidebarWidth } from "../../static/constants";
import NavSection from "./NavSection";

const sections: { title: string; items: ISidebarItem[] }[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/app/dashboard",
        icon: <Dashboard />,
      },
      {
        title: "Settings",
        href: "/app/settings",
        icon: <Settings />,
        children: [
          {
            title: "Settings1",
            href: "/app/settings",
          },
          {
            title: "Settings2",
            href: "/app/settings/second",
          },
        ],
      },
    ],
  },
];

interface IProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

export default ({ onMobileClose, openMobile }: IProps) => {
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    onMobileClose();
  }, [location.pathname]);

  const content = (
    <Box className={classes.root}>
      <Box
        sx={{
          display: {
            lg: "none",
            xs: "flex",
          },
          justifyContent: "center",
          p: 2,
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>

      <Box sx={{ p: 2, alignItems: "center", display: "flex" }}>
        <Typography color="textPrimary" variant="h4">
          Dc Admin
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ p: 2 }}>
        {sections.map((section) => (
          <NavSection
            key={section.title}
            pathname={location.pathname}
            sx={{
              "& + &": {
                mt: 3,
              },
            }}
            {...section}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: SidebarWidth,
              backgroundColor: "background.paper",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: SidebarWidth,
              top: NavBarOffset,
              height: `calc(100% - ${NavBarOffset}px)`,
              backgroundColor: "background.paper",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
