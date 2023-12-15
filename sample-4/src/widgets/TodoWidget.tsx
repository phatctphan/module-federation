import { Box, Collapse, Divider, Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import {
  createItem,
  deleteItem,
  selectTodo,
  setFilterStatus,
  toggleCompletion,
} from "../store/TodoSlice";

export default function TodoWidget() {
  const { items, filter, statistics } = useSelector(selectTodo);
  const dispatch = useDispatch();

  return (
    <Stack direction="column" gap={1}>
      <Paper>
        <TodoForm onSubmit={({ content }) => dispatch(createItem(content))} />
      </Paper>

      <Paper>
        <TodoFilter
          statistics={statistics}
          value={filter.status}
          onChange={(_, value) => dispatch(setFilterStatus(value))}
        />
        <Divider />
        <TodoList
          items={items}
          render={(item, index) => (
            <Collapse key={item.id}>
              <Box>
                <TodoItem
                  data={item}
                  onCheck={() => dispatch(toggleCompletion(item.id))}
                  onDelete={() => dispatch(deleteItem(item.id))}
                />
                {index !== items.length - 1 && <Divider />}
              </Box>
            </Collapse>
          )}
        />
      </Paper>
    </Stack>
  );
}
