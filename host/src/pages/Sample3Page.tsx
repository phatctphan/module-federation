import { Stack, Typography } from "@mui/material";
import "./Sample3Page.css";
import Panel from "../components/Panel";
// @ts-ignore
import PrefixCssButton from "Sample3/PrefixCssButton";
// @ts-ignore
import ModularCssButton from "Sample3/ModularCssButton";
// @ts-ignore
import OverlapCssButton from "Sample3/OverlapCssButton";

export default function Sample3Page() {
  return (
    <Stack direction="column" gap={2}>
      <Typography>
        Naming your class names becomes a crucial part of avoiding style
        clashing 🤔. Fortunately, there are several techniques that can be
        employed to overcome this problems.
      </Typography>
      <br></br>

      <Stack direction="column" gap={4}>
        {/* Overlap styling rules */}
        <Panel title="Overlap Styling">
          <Stack direction="row" gap={1} alignItems="center">
            <button className="sample-3-button">Host Button</button>
            <Typography>has the same class name with</Typography>
            <OverlapCssButton>Overlap CSS Button</OverlapCssButton>
          </Stack>
        </Panel>

        {/* Style prefixing */}
        <Panel title="Style Prefixing">
          <Stack direction="column" gap={1}>
            <Typography>
              By giving a prefix to a class name, it gives a namespace boundary
              for our components.
            </Typography>
            <PrefixCssButton>Prefix CSS Button</PrefixCssButton>
          </Stack>
        </Panel>

        {/* Modular CSS */}
        <Panel title="Modular CSS">
          <Stack direction="column" gap={1}>
            <Typography>
              For better solution, you can leverage modular CSS technique to
              give hashed class names for our components.
            </Typography>
            <ModularCssButton>Modular CSS Button</ModularCssButton>
          </Stack>
        </Panel>
      </Stack>
    </Stack>
  );
}
