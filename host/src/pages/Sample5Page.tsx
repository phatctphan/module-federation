import { Stack, Typography } from "@mui/material";
// @ts-ignore
import * as WebComponent from "Sample5/web-components";

WebComponent.register();
export default function Sample5Page() {
  return (
    <Stack direction="column" gap={2}>
      <Typography>
        Deal with UI library interoperability with Web Component as an adapter
        layer. The counter is implemented with Vue and then is{" "}
        <a href="https://vuejs.org/guide/extras/web-components#sfc-as-custom-element">
          wrapped with Web Component supported by Vue.
        </a>
      </Typography>
      {/* @ts-ignore */}
      <vue-counter initial="100" />
    </Stack>
  );
}
