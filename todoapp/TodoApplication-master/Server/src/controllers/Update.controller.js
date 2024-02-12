import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constants.js";
import Todo from "../models/Todo.js";

export const UpdateTodo = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(
      jsonGenerate(
        StatusCode.VALIDATION_ERROR,
        "todo id is required",
        error.mapped()
      )
    );
  }
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { userId: req.userId, _id: req.body.todo_id },
      {
        $set: {},
      },
      { new: true }
    );

    if (updatedTodo) {
      return res.json(
        jsonGenerate(StatusCode.SUCCESS, "Todo updated", updatedTodo)
      );
    } else {
      return res.json(
        jsonGenerate(StatusCode.NOT_FOUND, "Todo not found", null)
      );
    }
  } catch (error) {
    return res.json(
      jsonGenerate(
        StatusCode.UNPROCESSABLE_ENTITY,
        "Could not update todo",
        null
      )
    );
  }
};
