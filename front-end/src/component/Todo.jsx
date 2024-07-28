import React from "react";
import OneTodo from "./OneTodo";

function Todo({todos}) {
    
  return (
    <>
    {todos.map(function(todo){
       return <OneTodo todo={todo} />
    })}
    
    </>
  );
}

export default Todo;
