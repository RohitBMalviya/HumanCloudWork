import express from "express";
import { check } from "express-validator";
import { RegisterSchema } from "../validatorSchema/RegisterSchema.js";
import { VerificationSchema } from "../validatorSchema/VerificationSchema.js";
import { LoginSchema } from "../validatorSchema/loginSchema.js";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";
import { createTodo } from "../controllers/Todo.controller.js";
import { GetTodos } from "../controllers/TodoList.controller.js";
import { MarkTodo } from "../controllers/MakeTodo.controller.js";
import { RemoveTodo } from "../controllers/Remove.controller.js";
import { UpdateTodo } from "../controllers/Update.controller.js";
import { sendMail } from "../controllers/SendMail.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);

apiRoute.get("/mail", sendMail);

apiProtected.post(
  "/createTodo",
  [check("desc", "Todo desc is required").exists()],
  createTodo
);

apiProtected.post(
  "/markTodo",
  [check("todo_id", "Todo id is required").exists()],
  MarkTodo
);

apiProtected.post(
  "/updateTodo",
  [
    check("todo_id", "Todo id is required").exists(),
    check("desc", "Todo desc is required").exists(),
  ],
  UpdateTodo
);

apiProtected.post(
  "/deleteTodo",
  [check("todo_id", "Todo id is required").exists()],
  RemoveTodo
);

apiProtected.get("/todolist", GetTodos);

export default apiRoute;
