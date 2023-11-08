import { creatContext, useContext } from "react";

export const TodoContext = creatContext({});

export const useTodo = () => {
  return useContext(TodoContext);
};
