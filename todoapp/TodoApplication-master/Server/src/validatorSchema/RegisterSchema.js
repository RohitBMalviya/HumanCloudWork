import { check } from "express-validator";

export const RegisterSchema = [
  check("name").trim().isAlpha().withMessage("Name should be Alphabet only"),

  check("username", "Username is required")
    .exists()
    .isAlphanumeric()
    .withMessage("Username should be Alphanumeric character only")
    .trim()
    .isLength({ min: 6, max: 32 }),

  check("email", "Email is required").exists().isEmail().trim(),

  check("password", "Password is required")
    .exists()
    .isLength({ min: 6, max: 100 })
    .trim(),
];
