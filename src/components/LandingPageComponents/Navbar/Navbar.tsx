"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GraduationCap, LogOut, Menu, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : cn(
              "bg-transparent",
              pathname !== "/" &&
                "backdrop-blur shadow border-b border-gray-100"
            )
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/aarambha-logo1.png"
                alt="Aarambha Logo"
                width={120}
                height={120}
              />
            </Link>
          </motion.div>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            {pathname !== "/login" &&
              pathname !== "/signup" &&
              pathname !== "/" && (
                <div className="hidden lg:flex items-end justify-end space-x-8">
                  <Link
                    href="/training"
                    className="text-gray-700 text-sm hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors flex items-center gap-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Training
                  </Link>
                </div>
              )}

            {/* Desktop Auth Buttons */}
            {(pathname === "/login" ||
              pathname === "/signup" ||
              pathname === "/") && (
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-gray-700 hover:text-blue-600"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 btn-hover"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            )}
            {pathname !== "/login" &&
              pathname !== "/signup" &&
              pathname !== "/" && (
                <div className="hidden lg:block">
                  <>
                    {/* Profile dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="relative h-8 w-8 rounded-full"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="Profile"
                            />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        align="end"
                        forceMount
                      >
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">
                              John Doe
                            </p>
                            <p className="text-xs leading-none text-muted-foreground">
                              john.doe@example.com
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <Link href={"/login"}>
                          <DropdownMenuItem className="cursor-pointer">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                </div>
              )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/images/aarambha-logo1.png"
                      alt="Aarambha Logo"
                      width={120}
                      height={120}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-900 font-heading">
                    Aaarambha Career Services
                  </span>
                </div>

                {/* Mobile Navigation Links */}
                {/* <div className="space-y-4">
                  <Link
                    href="/jobs"
                    className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Briefcase className="h-4 w-4" />
                    Jobs
                  </Link>
                  <Link
                    href="/courses"
                    className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <GraduationCap className="h-4 w-4" />
                    Courses
                    <Badge variant="secondary" className="ml-1 text-xs">
                      New
                    </Badge>
                  </Link>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block font-medium text-gray-900 hover:text-blue-600 transition-colors text-left"
                  >
                    About
                  </button>
                  <Link
                    href="/contact"
                    className="block font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div> */}

                {/* Mobile Auth Buttons */}
                {pathname === "/login" || pathname === "/signup" ? (
                  <div className="space-y-3 pt-6">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full bg-transparent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 btn-hover"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3 pt-6">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full bg-transparent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p>Profile</p>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 btn-hover"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/login">Logout</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
