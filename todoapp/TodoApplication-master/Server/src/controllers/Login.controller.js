import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helper.js";
import { StatusCode, JWT_TOKEN_SECRET } from "../utils/constants.js";
import User from "../models/User.js";
import Jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.json(
        jsonGenerate(
          StatusCode.UNPROCESSABLE_ENTITY,
          "Email or Password is Incorrect"
        )
      );
    }
    const verified = bcrypt.compareSync(password, user.password);
    if (!verified) {
      return res.json(
        jsonGenerate(
          StatusCode.UNPROCESSABLE_ENTITY,
          "Email or Password is Incorrect"
        )
      );
    }
    const token = Jwt.sign({ userId: user._id }, JWT_TOKEN_SECRET);
    return res.json(
      jsonGenerate(StatusCode.SUCCESS, "Login Successfull", {
        userId: user._id,
        token: token,
      })
    );
  }
  res.json(
    jsonGenerate(
      StatusCode.VALIDATION_ERROR,
      "Validation error",
      errors.mapped()
    )
  );
};

export default Login;
