"use server";

import { checkRole } from "@/lib/clerk";
import { prisma } from "@/lib/prisma";
import {
  createMessageSchema,
  CreateMessageSchema,
  createNotificationSchema,
  CreateNotificationSchema,
} from "@/server/schemas/notifications";
import { getUser } from "./user";

export const sendNotifications = async (rawData: CreateNotificationSchema) => {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) throw new Error("Unauthorized");

  const data = createNotificationSchema.parse(rawData);

  const allUserIds = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  console.log(allUserIds);

  await prisma.notification.createMany({
    data: allUserIds.map((user) => ({
      userId: user.id,
      title: data.title,
      content: data.content,
      link: data.link,
    })),
  });
};

export const getNotifications = async () => {
  const { userId } = await getUser();

  const notifications = await prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return notifications;
};

export const readAllNotifications = async () => {
  const { userId } = await getUser();

  await prisma.notification.updateMany({
    where: {
      userId,
      readAt: null,
    },
    data: {
      readAt: new Date(),
    },
  });
};

export const sendMessageToSuperuser = async (rawData: CreateMessageSchema) => {
  const superuserEmail = process.env.SUPERUSER_EMAIL;
  if (!superuserEmail) throw new Error("SUPERUSER_EMAIL not defined");

  const data = createMessageSchema.parse(rawData);

  const superuser = await prisma.user.findUnique({
    where: {
      email: process.env.SUPERUSER_EMAIL,
    },
  });

  if (!superuser) throw new Error("Superuser not found");

  await prisma.message.create({
    data: {
      userId: superuser.id,
      name: data.name,
      email: data.email,
      message: data.message,
    },
  });
};
