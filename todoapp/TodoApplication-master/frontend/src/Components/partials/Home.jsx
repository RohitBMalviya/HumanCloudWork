import React, { useEffect, useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
import AddTodoModal from "./AddTodoModal";
import { getTodoListApi, getToken } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Home() {
  const [list, setList] = useState([]);
  const [refreshList, setRefreshList] = useState();
  const navigation = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigation("/login");
    }
    fetchTodoList();
  }, [refreshList]);
  async function fetchTodoList() {
    const result = await getTodoListApi();
    console.log("todoList", result);
    if (result.status === 200 && result.data.status === 200) {
      setList(result.data.data.todos.reverse());
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-md-center mt-4">
          {list.map((todo) => (
            <Todo todo={todo} key={todo._id} setRefreshList={setRefreshList} />
          ))}
        </div>
        <div
          className="container"
          style={{ position: "fixed", right: 50, bottom: 50, zIndex: 1030 }}
        >
          <button
            className="btn btn-outline-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>
        </div>
        <AddTodoModal setRefreshList={setRefreshList} />
      </div>
    </>
  );
}

export default Home;
