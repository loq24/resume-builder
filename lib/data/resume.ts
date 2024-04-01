import prisma from "../prisma";

export async function fetchResumes(userId: string) {
  return prisma.resume.findMany({
    where: {
      userId,
    },
  });
}

export async function insertResume(userId: string, title = "New Resume") {
  return prisma.resume.create({
    data: {
      title,
      userId,
    },
  });
}
