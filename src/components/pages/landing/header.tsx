import Logo from "@/assets/logo.svg";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  user: User | null;
};

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-1/2 z-10 bg-background w-full max-w-6xl -translate-x-1/2 flex items-center justify-between min-h-[100px] text-accent-foreground">
      <Logo className="w-full max-w-[150px]" />
      <div className="flex items-center gap-3 md:gap-5">
        {!!user ? (
          <>
            <Link href="/dashboard" passHref>
              <Button variant="default">
                Acessar plataforma <LogIn />
              </Button>
            </Link>
            <Avatar src={user.imageUrl} className="rounded-full" />
          </>
        ) : (
          <>
            <Link
              href="/auth/sign-in"
              className="hover:text-primary hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
            <Link href="/auth/sign-up" passHref>
              <Button variant="default">
                <LogIn /> Cadastre-se
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
