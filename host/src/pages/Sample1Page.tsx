// @ts-ignore
import { Stack, Typography } from "@mui/material";
// @ts-ignore
import { createButton } from "Sample1/index";
import { useEffect, useRef } from "react";

export default function Sample1Page() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const node = ref.current;
      node.innerHTML = "";
      node.append(createButton("😁 Click Me!"));
    }
  }, [ref]);

  return (
    <Stack direction="column" gap={2}>
      <Typography variant="body1">
        A very straight-forward sample of Module Federation. The exported{" "}
        <b>
          <code>createButton</code>
        </b>{" "}
        function is imported to this page and is injected to a DOM tree.
      </Typography>
      <div ref={ref}></div>
    </Stack>
  );
}
