import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    //todosにtodoを追加する
    setTodos([
      //現在のtodosを追加
      ...todos,
      {
        content: value,
        id: nanoid(),
      },
    ]);
  };

  //削除機能
  const deleteTodo = (id) => {
    //渡されたidをもとにそのidのついたtodoを削除する

    //todo(配列)から(もし、オブジェクトの持つidプロパティの値が
    //"引数"で渡されたidの値と等しい場合)、その要素を取り除く

    //配列から、条件に合致する要素を取り除く関数、もしくは条件に合致する要素のみ取り出す関数
    setTodos(todos.filter((todo) => todo.id !== id)); //削除したい要素以外の配列を集めた配列返す、state`TOdos`を上書きする
  };

  return (
    <>
      <h1>ToDo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;