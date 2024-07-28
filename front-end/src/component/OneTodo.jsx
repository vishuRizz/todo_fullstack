import React from "react";

function OneTodo({ todo }) {
  function completeButton(){
    
  }
  return (
    <>
      <div className="flex ">
        <h2 className="m-3"> {todo.title} </h2>
        <h2 className="m-3">{todo.description}</h2>
        <button onClick={completeButton} type="button" class="btn btn-secondary button1 ml-6 m-3">
          {todo.complete === true ? "task completed" : "mark as completed"}
        </button>
      </div>
    </>
  );
}

export default OneTodo;
