import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn signUpUrl="/auth/sign-up" fallbackRedirectUrl="/dashboard" />;
}
