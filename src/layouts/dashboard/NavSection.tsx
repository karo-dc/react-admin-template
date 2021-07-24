import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { matchPath } from "react-router-dom";
import { Button, List, ListSubheader } from "@material-ui/core";
import type { ListProps } from "@material-ui/core";
import NavItem from "./NavItem";
import { ISidebarItem } from "../../../@types/misc";

interface IProps extends ListProps {
  items: ISidebarItem[];
  pathname: string;
  title: string;
}

const renderNavItems = ({
  depth = 0,
  items,
  pathname,
}: {
  items: ISidebarItem[];
  pathname: string;
  depth?: number;
}) => (
  <List disablePadding>
    {items.reduce((acc, item) => {
      const key = `${item.title}-${depth}`;
      const exactMatch = item.href
        ? !!matchPath(
            {
              path: item.href,
              end: true,
            },
            pathname
          )
        : false;

      if (item.children) {
        const partialMatch = item.href
          ? !!matchPath(
              {
                path: item.href,
                end: false,
              },
              pathname
            )
          : false;

        return acc.concat(
          <NavItem
            active={partialMatch}
            depth={depth}
            icon={item.icon}
            info={item.info}
            key={key}
            open={partialMatch}
            href={item.href}
            title={item.title}
          >
            {renderNavItems({
              depth: depth + 1,
              items: item.children,
              pathname,
            })}
          </NavItem>
        );
      }

      return acc.concat(
        <NavItem
          active={exactMatch}
          depth={depth}
          icon={item.icon}
          info={item.info}
          key={key}
          href={item.href}
          title={item.title}
        />
      );
    }, [] as ReactNode[])}
  </List>
);

export default (props: IProps) => {
  const { items, pathname, title, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: "text.primary",
            fontSize: "0.75rem",
            lineHeight: 2.5,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {title}
        </ListSubheader>
      }
      {...other}
    >
      {renderNavItems({
        items,
        pathname,
      })}
    </List>
  );
};
