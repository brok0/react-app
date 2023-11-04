import React, { useState } from "react";
import "./todo.css";
import Modal from "../Modal/Modal";

function Todo({ title, btnText }) {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open);
  }

  return (
    <div className="todo-card">
      <h2>{title}</h2>
      <button onClick={handleModal}>{btnText}</button>
      {open ? <Modal handleModal={handleModal}></Modal> : ""}
    </div>
  );
}

export default Todo;
