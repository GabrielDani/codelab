"use server";

import { checkRole } from "@/lib/clerk";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type FilledUser = {
  user: NonNullable<Awaited<ReturnType<typeof prisma.user.findUnique>>>;
  userId: string;
  clerkUserId: string;
};

type EmptyUser = {
  user: null;
  userId: null;
  clerkUserId: null;
};

export function getUser(throwError?: true): Promise<FilledUser>;
export function getUser(throwError: false): Promise<FilledUser | EmptyUser>;

export async function getUser(
  throwError = true
): Promise<FilledUser | EmptyUser> {
  const { userId } = await auth();

  const emptyUser: EmptyUser = {
    user: null,
    userId: null,
    clerkUserId: null,
  };

  if (!userId) {
    if (!throwError) return emptyUser;
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    if (!throwError) return emptyUser;
    throw new Error("User not found");
  }

  return {
    user,
    clerkUserId: userId,
    userId: user.id,
  };
}

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  const isAdmin = checkRole("admin");
  if (!isAdmin) throw new Error("Unauthorized");

  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          purchases: true,
          completedLessons: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return users.map(({ _count, ...user }) => ({
    ...user,
    purchasedCourses: _count.purchases,
    completedLessons: _count.completedLessons,
  }));
};
