import prisma from "../prisma";

export async function fetchResumes(userId: string) {
  return prisma.resume.findMany({
    where: {
      userId,
    },
  });
}

export async function fetchResume(id: string) {
  return prisma.resume.findUnique({
    where: {
      id,
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

export async function deleteResume(id: string) {
  return prisma.resume.delete({
    where: {
      id,
    },
  });
}

export async function updateResumeTitle(id: string, title: string) {
  return prisma.resume.update({
    data: {
      title,
    },
    where: {
      id,
    },
  });
}
