import {
  Stack,
  Typography,
  Checkbox,
  StackProps,
  IconButton,
  Box,
} from "@mui/material";
import { ChangeEvent } from "react";
import { TodoItemModel, TodoStatus } from "./TodoModel";
import DeleteIcon from "@mui/icons-material/Delete";

export type TodoItemProps = {
  data: TodoItemModel;
  onCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
} & StackProps;

export default function TodoItem({
  data: { content, status },
  onCheck,
  onDelete,
  ...props
}: TodoItemProps) {
  return (
    <Stack p={1} gap={1} direction="row" alignItems="center" {...props}>
      <Checkbox checked={status === TodoStatus.COMPLETED} onChange={onCheck} />
      <Box flex={1} overflow="hidden" maxWidth="80%">
        <Typography variant="body1">{content}</Typography>
      </Box>
      <Box flex={2} textAlign="right">
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Stack>
  );
}
