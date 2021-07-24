import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Theme,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";

import { Colors } from "../../assets/colors";
import Logo from "../../components/Logo";
import AccountPopover from "./AccountPopover";

export default ({ onMobileNavOpen, ...rest }: any) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} elevation={0} {...rest}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden lgDown>
          <RouterLink to="/app/dashboard">
            <Logo />
          </RouterLink>
        </Hidden>

        <Box flexGrow={1} />

        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
}));
