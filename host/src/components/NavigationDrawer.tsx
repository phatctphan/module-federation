import { Box, Drawer, List } from "@mui/material";
import { routes } from "../router";
import NavigationItem from "./NavigationItem";

const DRAWER_WIDTH = "250px";

export default function NavigationDrawer() {
  return (
    <>
      <Box width={DRAWER_WIDTH} />
      <Drawer variant="permanent" PaperProps={{ elevation: 2 }}>
        <Box width={DRAWER_WIDTH}>
          <List>
            {routes.map((props) => (
              <NavigationItem key={props.path} {...props} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
