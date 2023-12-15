import { Stack, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
// @ts-ignore
const TodoApp = lazy(() => import("Sample4/App"));

export default function Sample4Page() {
  return (
    <Stack direction="column" gap={2}>
      <Typography>
        Put a whole Todo application powered by Redux and Material UI inside a
        host application.
      </Typography>
      <Suspense fallback={null}>
        <TodoApp />
      </Suspense>
    </Stack>
  );
}
