import Link from "next/link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex w-full flex-row items-center gap-6 text-lg font-medium md:text-sm">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-headline font-bold">Product Launchpad</span>
        </Link>
      </nav>
    </header>
  );
}
