import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b border-b-border/40 bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <nav className="flex flex-row items-center gap-6 text-lg font-medium md:text-sm">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-headline font-bold text-white">Smart Hardhat</span>
        </Link>
      </nav>
      <Button>Request a Demo</Button>
    </header>
  );
}
