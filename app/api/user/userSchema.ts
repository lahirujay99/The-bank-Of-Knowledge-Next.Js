import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const SignUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  companyName: z.string(),
  password: z.string().min(4),
});

export const UpdateSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  companyName: z.string(),
});
