export enum TodoStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type TodoItemModel = {
  id: number;
  content: string;
  status: string;
};
