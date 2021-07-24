import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const { user, logout } = useAuth0();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Avatar
          src={user?.avatar}
          sx={{
            height: 32,
            width: 32,
          }}
        />
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 240 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color="textPrimary" variant="subtitle2">
            {user?.name}
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ mt: 2 }}>
          <MenuItem component={RouterLink} to="/">
            <ListItemIcon>
              <PersonIcon color={"inherit"} fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="subtitle2">
                  Profile
                </Typography>
              }
            />
          </MenuItem>
        </Box>

        <Box sx={{ p: 2 }}>
          <Button
            color="primary"
            fullWidth={true}
            onClick={handleLogout}
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </Popover>
    </>
  );
};
