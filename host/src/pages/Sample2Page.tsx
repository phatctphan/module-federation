import { Stack, Typography } from "@mui/material";
import { Suspense, lazy } from "react";

// @ts-ignore
const Button = lazy(() => import("Sample2/Button"));

export default function Sample2Page() {
  return (
    <Stack direction="column" gap={2}>
      <Typography>
        Another sample of{" "}
        <b>
          <code>Button</code>
        </b>{" "}
        React component styled with TailwindCSS.
      </Typography>
      <Suspense fallback={null}>
        <Button onClick={() => alert("Clicked!")}>😒 Not a Button</Button>
      </Suspense>
    </Stack>
  );
}
