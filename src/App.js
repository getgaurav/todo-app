import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function TodoApp(props) {
  const [addTodo, setAddTodo] = useState(false);

  return (
    <App>
      <Navbar />

      <Todos somedata={addTodo} />

      <AddButton
        onClick={() => {
          setAddTodo(true);
        }}
      >
        <FaPlus size={22} color="#0abe51" />
      </AddButton>
      <Github>
        <a href="https://github.com/getgaurav/todo-app">@getgaurav | GitHub</a>
      </Github>
      <AddTodo addTodo={addTodo} setAddTodo={setAddTodo}></AddTodo>
    </App>
  );
}

const App = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 100%;
  margin: auto;
  position: fixed;
  z-index: 999;
`;
const AddButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  top: calc(100% - 90px);
  left: calc(100% - 100px);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0px 0px 31px -2px #92929259;
  border: 2px solid #0abe51;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: rotate(90deg);
  }
`;
const Github = styled.div`
  position: fixed;
  top: 50%;
  left: -30px;
  height: 40px;
  width: auto;
  transform: rotate(270deg) translate(0, 50%);
  a {
    color: #ccc;
    font-weight: bold;
    transition: all 0.3s;
  }
  a:hover {
    color: #0abe51;
  }
`;

export default TodoApp;
