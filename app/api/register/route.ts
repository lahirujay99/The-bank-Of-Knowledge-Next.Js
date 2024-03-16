import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "../user/userSchema";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, companyName, password } = body;
  console.log(body);
  const validation = SignUpSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const isExistEmail = await prisma.user.findUnique({
    where: { email },
  });

  if (isExistEmail)
    return NextResponse.json(
      { message: "user already exist" },
      { status: 401 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      phone,
      companyName,
      password: hashedPassword,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
