import React from "react";
import styled from "styled-components";
import { FcTodoList } from "react-icons/fc";
import { CgUserlane } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

function Navbar() {

  

  return (
    <Header>
      <Logo>
        <a href="/">
          <FcTodoList size={30} />
          TODO APP
        </a>
      </Logo>
      <SearchBAr>
        <input type="text" placeholder="Search here your todos ..." />
        <button>
          <BiSearch size={20} />
        </button>
      </SearchBAr>
      <User>
        <CgUserlane size={20} />
      </User>
    </Header>
  );
}

const Header = styled.div`
  width: 90%;
  height: 60px;
  position: relative;
  top: 10px;
  margin: auto;
  border-radius: 10px;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0px 3px 10px -3px #92929259;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 170px;
  font-size: 22px;
  font-weight: 700;
  height: auto;
  padding-left: 20px;
  a {
    color: #0abe51;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const SearchBAr = styled.div`
  width: 60%;
  height: 40px;
  background-color: #07d20414;
  border-radius: 4px;
  display: flex;
  input {
    width: calc(100% - 60px);
    border: none;
    background: none;
    height: 40px;
    padding-left: 20px;
    font-size: 14px;
    color: #222;
  }
  button {
    width: 60px;
    border: none;
    background: none;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }
`;
const User = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #0abe51;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 1px solid #0abe51;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 21px -6px #92929259;
  transition: all 0.3s;
  :hover {
    transform: scale(1.08);
  }
`;

export default Navbar;
