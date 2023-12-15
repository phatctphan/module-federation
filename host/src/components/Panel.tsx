import { Stack, StackProps, Typography } from "@mui/material";

export type PanelProps = {
  title: string;
} & StackProps;

export default function Panel({ children, title, ...props }: PanelProps) {
  return (
    <Stack direction="column" gap={1} {...props}>
      <Typography variant="h6">{title}</Typography>
      <Stack direction="row" gap={1} alignItems="center">
        {children}
      </Stack>
    </Stack>
  );
}
