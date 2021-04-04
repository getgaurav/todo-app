import React, { useState } from "react";
import reactDom from "react-dom";
// import ReactDOM from "react-dom";
import styled from "styled-components";

function AddTodo({ addTodo, setAddTodo }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const CancelTodo = () => {
    setAddTodo(false);
    setTitle('')
    setDescription('')
  }

  const addTodoList = () => {

    const todoData = {
      'key': Math.random().toString(36).substr(2, 9),
      'title': title,
      'des': description
    };

    const oldData = JSON.parse(localStorage.getItem('todo-app-data'));

    if (!oldData) {
      localStorage.setItem('todo-app-data', `[${JSON.stringify(todoData)}]`);
    }
    else {
      oldData.push(todoData);
      localStorage.setItem('todo-app-data', JSON.stringify(oldData));
    }
    setTimeout(CancelTodo, 400);
  }



  if (!addTodo) return null;

  return reactDom.createPortal(
    <AddMyTodo>
      <Card>
        <Title value={title} placeholder="Enter Title here..." onChange={(e) => { setTitle(e.target.value) }}></Title>
        <Description placeholder="Type your description here ..." value={description} onChange={(e) => { setDescription(e.target.value) }}></Description>
        <Button>
          <Add onClick={addTodoList}>Add</Add>
          <Cancel onClick={CancelTodo}>Cancel</Cancel>
        </Button>
      </Card>
    </AddMyTodo>,

    document.getElementById("portal")
  );
}






const AddMyTodo = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #0000009e;
  z-index: 1000;
  overflow: auto;
  transition: all 0.3s;
  display: flex;
`;
const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 3px 31px -2px #3e3c3ce6;
  width: 600px;
  height: 400px;
  margin: auto;
  padding: 20px;
  padding-bottom:10px;
  display: flex;
  flex-direction: column;
  overflow:hidden;
`;
const Title = styled.input`
  width: 98%;
  height: 60px;
  padding: 10px;
  font-size: 24px;
  margin:auto;
  margin-bottom: 10px;
  border:none;
  background-color:#fff;
  border-bottom:1px solid #ccc;
`;

const Description = styled.textarea`
  height:255px;
  padding:10px;
  font-size:14px;
  color:#333;
  font-weight:600;
  border:1px solid #ccc;
  border-radius:3px;
`;
const Button = styled.div`
  width: auto;
  height: 60px;
  margin-left: auto;
  display:flex;
  align-items:center;
`;
const Cancel = styled.button`
    width:100px;
    height:40px;
    border-radius:5px;
    border:2px solid #0abe51;
    color:#333;
    font-size:15px;
    font-weight:bold;
    background-color:#fff;
    margin-left:10px;
    cursor: pointer;
    /* box-shadow:0px 0px 21px -10px #3e3c3ce6; */
    transition:all 0.2s;
    :hover{
      background-color:#0abe51;
      color:#fff;
    }
`;
const Add = styled(Cancel)``;

export default AddTodo;
