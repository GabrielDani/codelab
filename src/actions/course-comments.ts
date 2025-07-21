"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "./user";

type CreateLessonCommentPayload = {
  courseSlug: string;
  lessonId: string;
  content: string;
  parentId?: string;
};

export const createLessonComment = async ({
  content,
  courseSlug,
  lessonId,
  parentId,
}: CreateLessonCommentPayload) => {
  const { userId } = await getUser();

  if (content.length > 500)
    throw new Error("Comentário deve ter no máximo 500 caracteres");

  const course = await prisma.course.findUnique({
    where: {
      slug: courseSlug,
    },
  });

  if (!course) throw new Error("Curso não encontrado");

  // TODO: verificar se o usuário possui o curso

  const lesson = await prisma.courseLesson.findUnique({
    where: {
      id: lessonId,
    },
  });

  if (!lesson) throw new Error("Aula não encontrada");

  const comment = await prisma.lessonComment.create({
    data: {
      content,
      lessonId,
      userId,
      parentId,
    },
  });

  // TODO: notificar usuários

  return comment;
};
