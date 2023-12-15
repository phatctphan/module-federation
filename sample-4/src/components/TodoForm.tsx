import { Button, InputBase, Stack, StackProps, styled } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export type TodoFormProps = {
  onSubmit: (values: TodoSchema) => void;
} & Omit<StackProps, "onSubmit">;

const NoteInput = styled(InputBase)`
  flex: 1;
`;

export type TodoSchema = {
  content: string;
};

const TODO_VALIDATION_SCHEMA = yup.object({
  content: yup.string().required(),
});

export default function TodoForm({ onSubmit, ...props }: TodoFormProps) {
  const formik = useFormik<TodoSchema>({
    initialValues: {
      content: "",
    },
    validationSchema: TODO_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      formik.resetForm();
      onSubmit && onSubmit(values);
    },
  });

  return (
    <Stack py={1} px={2} gap={2} direction="row" alignItems="center" {...props}>
      <NoteInput
        name="content"
        placeholder="Enter your task note"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.content && Boolean(formik.errors.content)}
      />
      <Button disableElevation onClick={formik.submitForm}>
        Create
      </Button>
    </Stack>
  );
}
