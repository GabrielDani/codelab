import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const blockedForAuth = createRouteMatcher(["/"]);
const isPublicRoute = createRouteMatcher(["/", "/dashboard", "/auth(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();

  // Usuário logado não deve acessar "/"
  if (blockedForAuth(req) && session?.isAuthenticated) {
    const url = new URL("/dashboard", req.url);
    return NextResponse.redirect(url);
  }

  // Usuário não logado → usa helper do Clerk
  if (!isPublicRoute(req) && !session?.isAuthenticated) {
    const url = new URL("/dashboard", req.url);
    return NextResponse.redirect(url);
  }

  // Usuário logado mas não é admin
  if (isAdminRoute(req) && session.sessionClaims?.metadata?.role !== "admin") {
    const url = new URL("/dashboard", req.url);
    return NextResponse.redirect(url);
  }
  if (isAdminRoute(req) && session.sessionClaims?.metadata?.role !== "admin") {
    const url = new URL("/dashboard", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
