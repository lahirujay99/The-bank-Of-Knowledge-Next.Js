import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const userEmail = params.email;

  const isAvailable = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!isAvailable)
    return NextResponse.json(
      { message: "user doesn't exist" },
      { status: 404 }
    );

  await prisma.user.delete({ where: { id: isAvailable.id } });

  return NextResponse.json({}, { status: 200 });
}
