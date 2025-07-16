"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Eye,
  EyeOff,
  Briefcase,
  Mail,
  Lock,
  ArrowRight,
  House,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log("Login attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute right-10 top-10">
        <Link href="/">
          <House className="text-gray-500 tex-2xl w-6 h-6 hover:opacity-80 cursor-pointer" />
        </Link>
      </div>
      <div className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Login Card */}
              <Card className="shadow-xl border-0">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Image
                        src="/images/aarambha-logo1.png"
                        alt="Aarambha Logo"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-center">
                    Sign In
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2 pb-8">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10 h-12"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Link href={"/dashboard"}>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Signing In...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Sign In
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        )}
                      </Button>
                    </Link>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
