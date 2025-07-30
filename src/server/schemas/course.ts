import { CourseDifficulty } from "@/generated/prisma";
import z from "zod";

const courseLessonSchema = z.object({
  id: z.string(),
  title: z.string().nonempty({ message: "Titulo é obrigatório" }),
  description: z.string().nonempty({ message: "Descrição é obrigatória" }),
  videoId: z.string().nonempty({ message: "Video é obrigatório" }),
  durationInMs: z.number().min(1, { message: "Duração é obrigatória" }),
  order: z.number().min(1, { message: "Ordem é obrigatório" }),
});

const courseModuleSchema = z.object({
  id: z.string(),
  title: z.string().nonempty({ message: "Titulo é obrigatório" }),
  description: z.string().nonempty({ message: "Descrição é obrigatória" }),
  order: z.number().min(1, { message: "Ordem é obrigatório" }),
  lessons: z
    .array(courseLessonSchema)
    .min(1, { message: "Adicione pelo menos uma aula" }),
});

export type CreateCourseModulePayload = z.infer<typeof courseModuleSchema>;

const courseSchema = z.object({
  title: z.string().nonempty({ message: "Titulo é obrigatório" }),
  shortDescription: z.string().optional(),
  price: z.number().min(1, { message: "Preço é obrigatório" }),
  discountPrice: z.number().optional(),
  description: z.string().nonempty({ message: "Descrição é obrigatório" }),
  difficulty: z.nativeEnum(CourseDifficulty, {
    message: "Dificuldade é obrigatório",
  }),
  tagIds: z
    .array(z.string())
    .min(1, { message: "Selecione pelo menos uma tag" }),
  thumbnail: z.instanceof(File, { message: "Imagem é obrigatório" }),
});

export const createCourseSchema = courseSchema.extend({
  modules: z
    .array(courseModuleSchema)
    .min(1, { message: "Adicione pelo menos um módulo" }),
});

export type CreateCourseFormData = z.infer<typeof createCourseSchema>;
