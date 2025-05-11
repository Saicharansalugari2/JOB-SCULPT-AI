import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  Stars,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="top-0 w-full bg-gray-100 z-50 shadow-md">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Jobsculpt Logo"
            width={160} // Adjusted size
            height={80}
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-3 py-3 px-6 text-lg font-medium bg-black text-white border border-white">
                <LayoutDashboard className="h-5 w-5" />
                Industry Insights
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-3 py-3 px-6 text-lg font-medium bg-black text-white border border-white">
                  <Stars className="h-5 w-5" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg rounded-md">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-3 py-3 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100">
                    <FileText className="h-5 w-5" />
                    Build Resume With Gemini AI
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-3 py-3 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100">
                    <PenBox className="h-5 w-5" />
                    Generate Cover Letters With AI
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-3 py-3 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100">
                    <GraduationCap className="h-5 w-5" />
                    Interview Prep & Feedback with AI
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <Button className="bg-black text-white border border-black text-lg font-semibold rounded-lg px-6 py-3">
                SIGN IN TO USE FEATURES
              </Button>
            </SignInButton>
          </SignedOut>

          {/* User Profile */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
