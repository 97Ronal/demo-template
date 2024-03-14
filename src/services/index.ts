import { $TODO } from "../store/todo.ts";

class TodoListService {
  id: number;

  constructor() {
    this.id = 0;
  }

  add(task: string) {
    $TODO.update("add task", (draft) => {
      draft.list.push({
        content: task,
        status: "todo",
        id: this.id,
      });
    });

    this.id++;
  }

  clear() {
    $TODO.update("clear task", (draft) => {
      draft.list = [];
    });
  }

  delete(taskId: number) {
    $TODO.update("delete task", (draft) => {
      draft.list = draft.list.filter((i) => i.id !== taskId);
    });
  }

  toggle(taskId: number) {
    $TODO.update("toggle task status", (draft) => {
      draft.list = draft.list.map((i) => {
        if (i.id === taskId) {
          return {
            ...i,
            status: i.status === "done" ? "todo" : "done",
          };
        }
        return i;
      });
    });
  }
}

export const TodoService = new TodoListService();
