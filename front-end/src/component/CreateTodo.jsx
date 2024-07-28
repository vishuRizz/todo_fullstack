import React, { useRef, useState } from "react";

function CreateTodo({ addingTodo }) {
  //   let [title, setTitle] = useState("");
  //   let [description, setDescription] = useState("");

  let refTitle = useRef(null);
  let refDescription = useRef(null);

  function buttonOnClick() {
    const title = refTitle.current.value;
    const description = refDescription.current.value;
    if (title === "" || description === "") {
      alert("Please fill in all fields");
    } else {
      refTitle = "";
      refDescription = "";
      addingTodo(title, description);
      fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      })
        .then(async function (res) {
          const data = await res.json();
        })
        .catch((error) => console.error(error));
    }
    alert("todo has been added");
  }
  return (
    <>
      <div className="main">
        <div className="inputs">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Title
            </span>
            <input
              type="text"
              ref={refTitle}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Description
            </span>
            <input
              type="text"
              ref={refDescription}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <button
          onClick={buttonOnClick}
          type="button"
          class="btn btn-secondary button1"
        >
          Add todo
        </button>
      </div>
    </>
  );
}

export default CreateTodo;
