import { Stack, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
// @ts-ignore
const TodoWidget = lazy(() => import("Sample4/TodoWidget"));

export default function Sample4Page() {
  return (
    <Stack direction="column" gap={2}>
      <Typography>
        Put a whole Todo application powered by Redux and Material UI inside a
        host application.
      </Typography>
      <Suspense fallback={null}>
        <TodoWidget />
      </Suspense>
    </Stack>
  );
}
