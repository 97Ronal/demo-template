import React from 'react'
import { useState } from "react";

import { $TODO } from "../store/todo.ts";

import { TodoService } from "../services/index.ts";

export const TodoList = () => {
  const list = $TODO.use((state) => state.list);
  const [inputVal, setInputVal] = useState("");

  const addTask = () => {
    if (!inputVal.length) {
      console.error("空输入");
      return;
    }

    TodoService.add(inputVal);
    setInputVal("");
  };

  return (
    <div className="flex w-80 flex-col rounded-lg bg-blue-400 p-3">
      <div className="flex w-full gap-2">
        <input
          className="grow rounded border px-2 py-1 text-sm"
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="输入任务内容"
          value={inputVal}
        />
        <button
          onClick={addTask}
          type="button"
        >
          添加任务
        </button>
      </div>
      <ul className="mt-2 flex w-full flex-col gap-1 rounded-lg p-2 text-white">
        {list.length ? (
          list.map((todo) => (
            <li
              key={todo.id}
              className="w-full cursor-pointer rounded-lg py-1"
              onClick={() => TodoService.toggle(todo.id)}
              style={{
                textDecoration:
                  todo.status === "done" ? "line-through" : "none",
              }}
            >
              - {todo.content}
            </li>
          ))
        ) : (
          <div className="text-center text-lg">无任务</div>
        )}
      </ul>
    </div>
  );
};
