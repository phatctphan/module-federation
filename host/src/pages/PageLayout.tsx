import { Box, CssBaseline, Stack, Typography, darken } from "@mui/material";
import { Outlet, matchRoutes, useLocation } from "react-router-dom";
import NavigationDrawer from "../components/NavigationDrawer";
import { RouteObjectHandle, routes } from "../router";

export default function PageLayout() {
  const location = useLocation();
  const matches = matchRoutes(routes, location);
  let title = "Module Federation Samples";
  if (matches) {
    const match = matches[0];
    title = (match.route.handle as RouteObjectHandle).title;
  }

  return (
    <Stack
      direction="row"
      width="100%"
      height="100vh"
      sx={{ backgroundColor: darken("#fff", 0.02) }}
    >
      <CssBaseline />
      {/* navigation */}
      <Box width="max-content">
        <NavigationDrawer />
      </Box>
      {/* primary content */}
      <Box flex={1} px={6} py={4} overflow="auto">
        <Typography variant="h3">{title}</Typography>
        <Box maxWidth="500px" mt={2}>
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
}
