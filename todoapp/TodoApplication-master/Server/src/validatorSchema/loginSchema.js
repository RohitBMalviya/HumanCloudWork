import { check } from "express-validator";

export const LoginSchema = [
  check("email", "Email is required").exists().isEmail().trim(),

  check("password", "Password is required")
    .isLength({ min: 6, max: 100 })
    .trim(),
];
