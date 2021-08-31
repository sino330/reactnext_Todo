import React, { useState } from "react";

const Item = ({content,id,deleteTodo}) => {
  //(props)でもOK
  const [isDone, setIsDone] = useState(false); //=>状態の初期値


  const handleDelete=()=>{
    //Appコンポーネントのもつ、todosから自分の持つidと同じ要素を取り除いて欲しい
    deleteTodo(id)
  }
  //isDone =>現在の状態の参照
  //setIsDone =>状態を更新する関数
  //checkboxが変更された時に、isDoneの状態を更新する
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          setIsDone(!isDone);
        }}
      />
      <span
        style={
          //isDOneがtrueの場合前の"line-through"、falseならnone
          { textDecoration: isDone ? "line-through" : "none" }
        }
      >
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};
export default Item;