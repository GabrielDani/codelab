import { Roles } from "@/@types/clerk";
import { auth } from "@clerk/nextjs/server";

export const checkRole = async (role: Roles): Promise<boolean> => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata.role === role;
};
