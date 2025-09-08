import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
    return (
        <footer className="border-t border-t-border/40 py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold text-white">Smart Hardhat</span>
                </div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Smart Hardhat Inc. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
