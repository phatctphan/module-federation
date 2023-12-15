import { TabsProps, Tabs, Tab, Stack, Typography, Chip } from "@mui/material";
import { TodoStatus } from "./TodoModel";
import { TodoStatistics } from "../store/TodoSlice";

export type TodoFilterProps = {
  statistics: TodoStatistics;
} & TabsProps;

export default function TodoFilter({
  value,
  statistics,
  ...props
}: TodoFilterProps) {
  function renderLabel(text: string, count: number): JSX.Element {
    return (
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography>{text}</Typography>
        {count != 0 && (
          <Chip label={count} size="small" sx={{ minWidth: "30px" }} />
        )}
      </Stack>
    );
  }

  return (
    <Tabs value={value} variant="fullWidth" {...props}>
      <Tab label={renderLabel("All", statistics.total)} value={null} />
      <Tab
        label={renderLabel("Pending", statistics.pending)}
        value={TodoStatus.PENDING}
      />
      <Tab
        label={renderLabel("Completed", statistics.completed)}
        value={TodoStatus.COMPLETED}
      />
    </Tabs>
  );
}
