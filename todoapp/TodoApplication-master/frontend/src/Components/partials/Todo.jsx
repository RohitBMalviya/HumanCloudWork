import React from "react";
import moment from "moment/moment";
import { deleteTodoApi, markTodoApi } from "../Services/api";
import { toast } from "react-toastify";

function Todo({ todo, setRefreshList }) {
  const handleDelete = async () => {
    const result = await deleteTodoApi({
      todo_id: todo._id,
    });
    console.log("Delete Todo", result);
    if (result.data.status === 200) {
      setRefreshList(new Date());
      toast("Deleted");
    } else {
      toast("Failed to deleted ,Please try again!!");
    }
  };
  const handleMarkTodo = async () => {
    const result = await markTodoApi({
      todo_id: todo._id,
    });
    console.log("Make Todo", result);

    if (result.data.status === 200) {
      setRefreshList(new Date());
      toast(result.data.message);
    } else {
      toast("Failed to Mark ,Please try again!!");
    }
  };
  return (
    <>
      <div className="col-md-4 my-3">
        <div className={`card ${todo.isCompleted ? "bg-success" : "bg-light"}`}>
          <div className="card-header text-white">
            {todo.isCompleted ? "Completed" : "Not Completed"}
          </div>
          <div className="card-body">
            <h4 className="card-title">{todo.desc}</h4>
            <p className="card-text">{moment(todo.data).fromNow()}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
            <button
              className={`btn ${
                todo.isCompleted ? "btn-warning" : "btn-success"
              }`}
              onClick={handleMarkTodo}
            >
              {todo.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
