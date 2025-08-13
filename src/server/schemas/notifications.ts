import z from "zod";

export const createNotificationSchema = z.object({
  title: z.string().nonempty({ message: "Campo obrigatório" }),
  content: z.string().nonempty({ message: "Campo obrigatório" }),
  link: z.string().optional(),
});

export type CreateNotificationSchema = z.infer<typeof createNotificationSchema>;

export const createMessageSchema = z.object({
  name: z.string().nonempty({ message: "Campo obrigatório" }),
  email: z.string().nonempty({ message: "Campo obrigatório" }),
  message: z.string().nonempty({ message: "Campo obrigatório" }),
});

export type CreateMessageSchema = z.infer<typeof createMessageSchema>;
