import { Box, Collapse, Stack, StackProps, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { TodoItemModel } from "./TodoModel";

export type TodoListProps = {
  items: TodoItemModel[];
  render: (item: TodoItemModel, index: number) => JSX.Element;
} & Omit<StackProps, "children">;

export default function TodoList({ render, items, ...props }: TodoListProps) {
  const content =
    items.length !== 0 && items.map((child, index) => render(child, index));
  const empty = (
    <Collapse>
      <Box textAlign="center" p={2}>
        <Typography>No Items</Typography>
      </Box>
    </Collapse>
  );

  return (
    <Stack direction="column" {...props}>
      <TransitionGroup>{content || empty}</TransitionGroup>
    </Stack>
  );
}
