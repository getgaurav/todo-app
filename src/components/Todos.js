import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Todos({ somedata }) {


  const [data, setData] = useState([]);

  
const deleteTodo = (index) =>{
  let LocalData = JSON.parse(localStorage.getItem('todo-app-data'));
  LocalData.splice(index, 1)
  localStorage.setItem('todo-app-data',`${JSON.stringify(LocalData)}`)
  setData(LocalData);
}


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('todo-app-data'));
    setData(localData);
  }, [somedata]);




  if (!data) {
    return null
  } else {
    return (
      <TodoList>{
        data.map((data, index) => {
          return (
            <Todo key={data.key}>
              <TodoDetails>
                <Title>{data.title}</Title>
                <Descriptions>{data.des}</Descriptions>
              </TodoDetails>
              <Option>
                <OpButton>
                  <FiEdit size={20} />
                </OpButton>
                <OpButton onClick={()=>deleteTodo(index)}>
                  <MdDelete size={20} />
                </OpButton>
              </Option>
            </Todo>
          )
        }
        )
      }</TodoList>
    )
  }

}

const TodoList = styled.div`
  width: 82%;
  height: calc(100vh - 90px);
  margin: auto;
  padding: 10px;
  position: relative;
  z-index: 98;
  top: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const TodoDetails = styled.div`
  width: 100%;
  height: calc(100% - 26px);
`;
const Title = styled.div`
  border-bottom: 1px solid #0abe51;
  padding-bottom: 10px;
  font-weight: 500;
  padding-left: 4px;
`;
const Descriptions = styled.p`
  width: 100%;
  min-height: 120px;
  height: calc(100% - 80px);
  border: 1px;
  padding: 10px;
`;
const Option = styled.div`
  width: 100%;
  height: 30px;
`;
const OpButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  float: right;
  color: #444;
  cursor: pointer;
  margin-left:10px;
  display:none;
  transition:all 0.3s;
  :hover{
      color:#0abe51;
  }
`;
const Todo = styled.div`
  height: auto;
  flex-basis: 300px;
  padding: 10px;
  flex-shrink: 1;
  flex-grow: 1;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 0px 14px -6px #797979c4;
  overflow: hidden;
  :hover ${OpButton}{
    display:inherit;
  }
  
`;


export default Todos;
