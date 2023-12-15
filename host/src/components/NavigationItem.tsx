import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { RouteObject, useMatch, useNavigate } from "react-router-dom";
import { RouteObjectHandle } from "src/router";

export type NavigationItemProps = RouteObject;

export default function NavigationItem(props: NavigationItemProps) {
  const navigate = useNavigate();
  const handle = props.handle as RouteObjectHandle;
  // @ts-ignore
  const selected = useMatch(props.path) !== null;

  function handleClick(): void {
    navigate({ pathname: props.path });
    const title = handle.title;
    if (title) {
      document.title = title;
    }
  }

  return (
    <ListItem disablePadding>
      <ListItemButton selected={selected} onClick={handleClick}>
        <ListItemText primary={handle.navigation} />
      </ListItemButton>
    </ListItem>
  );
}
