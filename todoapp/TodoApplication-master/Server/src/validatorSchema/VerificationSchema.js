import { check } from "express-validator";

export const VerificationSchema = [
  check("email", "Email is required").exists().isEmail().trim(),

  check("opt", "OPT is required").exists().isLength({ min: 6, max: 6 }).trim(),
];
