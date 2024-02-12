import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helper.js";
import Jwt from "jsonwebtoken";
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

const AuthMiddleware = (req, res, next) => {
  if (req.headers["auth"] === undefined) {
    return res.json(jsonGenerate(StatusCode.AUTH_ERROR, "Access Denied"));
  }
  const token = req.headers["auth"];

  try {
    const decodeed = Jwt.verify(token, JWT_TOKEN_SECRET);
    console.log(decodeed);
    req.userId = decodeed.userId;
    return next();
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Invalid Token")
    );
  }
};

export default AuthMiddleware;
