import React from "react";
import Item from "./Item";

const List = ({ todos, deleteTodo }) => {
  //dataの数だけitemコンポートを呼び出す
  return (
    <ul>
      {/* <Item content={todos[0].content}></Item>
        <Item content={todos[1].content}></Item>
        <Item content={todos[2].content}></Item> */}
      {todos.map((todo) => {
        return (
          <Item
            content={todo.content}
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
          ></Item>
        );
      })}
    </ul>
  );
};

export default List;