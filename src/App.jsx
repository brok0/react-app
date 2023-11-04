import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";

const todos = [
  {
    title: "Title",
    btnText: "Open Modal",
  },
  {
    title: "Title",
    btnText: "Open Modal",
  },
  {
    title: "Title",
    btnText: "Open Modal",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TODOs</h1>
      <div className="wrapper">
        {todos.map((e) => {
          return <Todo title={e.title} btnText={e.btnText} />;
        })}
      </div>
    </>
  );
}

export default App;
