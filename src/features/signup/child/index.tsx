"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  User,
  MapPin,
  ArrowRight,
  Phone,
  Calendar,
  Building2,
  GraduationCap,
  AlertCircle,
  Users,
  Sparkles,
  House,
} from "lucide-react";
import Image from "next/image";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    userType: "",
    currentPosition: "",
    experience: "",
    address: "",
    city: "",
    country: "",
    bio: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";
    if (!formData.userType) newErrors.userType = "Please select your role";
    if (!formData.currentPosition.trim())
      newErrors.currentPosition = "Current position is required";
    if (!formData.experience)
      newErrors.experience = "Experience level is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!agreedToTerms)
      newErrors.terms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    console.log("Signup attempt:", { ...formData, skills: selectedSkills });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute right-10 top-10 z-20">
        <Link href="/">
          <House className="text-gray-500 tex-2xl w-6 h-6 hover:opacity-80 cursor-pointer" />
        </Link>
      </div>
      <div className="pt-12 lg:pt-22 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Signup Card */}
              <Card className="shadow-2xl border-0 glass">
                <CardHeader className="space-y-1 pb-6">
                  {/* Header */}
                  <div className="text-center">
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <Image
                          src="/images/aarambha-logo1.png"
                          alt="Aarambha Logo"
                          width={120}
                          height={120}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl text-center font-heading">
                    Create Your Account
                  </CardTitle>
                  <CardDescription className="text-center text-base">
                    Fill in your details to get started with Aaarambha Career
                    Services
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold font-heading text-gray-900 pb-2">
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                          >
                            First Name *
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className={`pl-10 h-12 form-input ${
                                errors.firstName ? "border-red-500" : ""
                              }`}
                              required
                            />
                          </div>
                          {errors.firstName && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.firstName}
                            </motion.p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                          >
                            Last Name *
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className={`pl-10 h-12 form-input ${
                                errors.lastName ? "border-red-500" : ""
                              }`}
                              required
                            />
                          </div>
                          {errors.lastName && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.lastName}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email Address *
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john.doe@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`pl-10 h-12 form-input ${
                                errors.email ? "border-red-500" : ""
                              }`}
                              required
                            />
                          </div>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </motion.p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone Number *
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={`pl-10 h-12 form-input ${
                                errors.phone ? "border-red-500" : ""
                              }`}
                              required
                            />
                          </div>
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.phone}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="dateOfBirth"
                          className="text-sm font-medium"
                        >
                          Date of Birth *
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className={`pl-10 h-12 form-input ${
                              errors.dateOfBirth ? "border-red-500" : ""
                            }`}
                            required
                          />
                        </div>
                        {errors.dateOfBirth && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.dateOfBirth}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Account Security */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold font-heading text-gray-900 border-b pb-2">
                        Account Security
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="password"
                            className="text-sm font-medium"
                          >
                            Password *
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a strong password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className={`pl-10 pr-10 h-12 form-input ${
                                errors.password ? "border-red-500" : ""
                              }`}
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                          {errors.password && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.password}
                            </motion.p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium"
                          >
                            Confirm Password *
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm your password"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className={`pl-10 pr-10 h-12 form-input ${
                                errors.confirmPassword ? "border-red-500" : ""
                              }`}
                              required
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                          {errors.confirmPassword && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.confirmPassword}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 h-14 text-lg btn-hover"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Creating Account...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Create My Account
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Sign In Link */}
                  <div className="text-center mt-6">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
