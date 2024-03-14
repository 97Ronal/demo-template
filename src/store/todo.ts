import { model } from "./base.ts";

type TodoItem = {
  content: string;
  status: "todo" | "done";
  id: number;
};

export type TodoListModel = {
  list: TodoItem[];
};

/**
 * todoList
 */
export const $TODO = model<TodoListModel>("TODO", {
  list: [],
});
