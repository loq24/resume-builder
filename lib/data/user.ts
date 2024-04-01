import prisma from "../prisma";

export async function insertUser(email: string) {
  return await prisma.user.create({
    data: {
      email
    }
  });
}

export async function fetchUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email
    }
  });
}
