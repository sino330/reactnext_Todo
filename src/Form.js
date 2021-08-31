import React,{useState} from "react";

const Form = ({addTodo}) => {
    const[value,setValue]=useState("")

    const handleSUbmit=(e)=>{
        e.preventDefault()
        console.log(value)
        addTodo(value)
    }

  return (
    <form onSubmit={handleSUbmit}>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};
export default Form;