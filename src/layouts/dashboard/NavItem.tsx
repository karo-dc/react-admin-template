import { Box, Button, Collapse, ListItem } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { Colors } from "../../assets/colors";

import type { ReactNode } from "react";
import type { ListItemProps } from "@material-ui/core";

interface IProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  href: string;
  title: string;
}

export default ({
  active,
  children,
  depth,
  icon,
  info,
  open: openProp,
  href,
  title,
  ...other
}: IProps) => {
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const paddingLeft = depth > 0 ? 32 + 8 * depth : 16;

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: "block",
          py: 0,
        }}
        {...other}
      >
        <Button
          endIcon={
            !open ? (
              <ChevronRightIcon fontSize="small" />
            ) : (
              <ChevronDownIcon fontSize="small" />
            )
          }
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: "text.secondary",
            fontWeight: "fontWeightMedium",
            justifyContent: "flex-start",
            pl: `${paddingLeft}px`,
            pr: "8px",
            py: "12px",
            textAlign: "left",
            textTransform: "none",
            width: "100%",
          }}
          variant="text"
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
    >
      <Button
        component={RouterLink}
        startIcon={icon}
        sx={{
          color: "text.secondary",
          fontWeight: "fontWeightMedium",
          justifyContent: "flex-start",
          textAlign: "left",
          pl: `${paddingLeft}px`,
          pr: "8px",
          py: "12px",
          textTransform: "none",
          width: "100%",
          ...(active && {
            color: "primary.main",
            fontWeight: "fontWeightBold",
            "& svg": {
              color: "primary.main",
            },
          }),
        }}
        variant="text"
        to={href}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};
