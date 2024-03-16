import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { UpdateSchema } from "./userSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userEmail } = body;

  const user = await prisma.user.findUnique({ where: { email: userEmail } });

  if (!user)
    return NextResponse.json({ message: "user doesnt exist" }, { status: 404 });

  return NextResponse.json(user, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, companyName } = body;
  const validation = UpdateSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 401 });

  const isUser = await prisma.user.findUnique({ where: { email: email } });
  if (!isUser)
    return NextResponse.json({ message: "user not found" }, { status: 404 });

  await prisma.user.update({
    where: { email: isUser.email },
    data: {
      name,
      phone,
      companyName,
    },
  });

  return NextResponse.json({ message: "success" }, { status: 201 });
}
