import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { StatusCode, JWT_TOKEN_SECRET } from "../utils/constants.js";
import User from "../models/User.js";
import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.json(
      jsonGenerate(
        StatusCode.VALIDATION_ERROR,
        "Todo is required",
        error.mapped()
      )
    );
  }
  try {
    const result = await Todo.create({
      userId: req.userId,
      desc: req.body.desc,
    });
    if (result) {
      const user = await User.findOneAndUpdate(
        { _id: req.userId },
        { $push: { todos: result } }
      );
      return res.json(
        jsonGenerate(StatusCode.SUCCESS, "Todo Created Successful", result)
      );
    }
  } catch (error) {
    return res.json(
      jsonGenerate(
        StatusCode.UNPROCESSABLE_ENTITY,
        "Something went wrong",
        error
      )
    );
  }
};
