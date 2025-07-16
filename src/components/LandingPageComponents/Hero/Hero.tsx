"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden pt-16 lg:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Your Career & Learning Journey Starts Here
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-heading"
            >
              Find Your Dream Job &{" "}
              <span className="gradient-text">Master New Skills</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Connect with top employers, access premium training courses, and
              accelerate your career growth. Whether you&apos;re seeking
              opportunities or building skills, we&apos;ve got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg btn-hover"
              >
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-2 bg-transparent btn-hover"
              >
                <Link href="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">1000+ Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                <span className="text-sm text-gray-600">50+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">10k+ Users</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 font-heading">
                      Job Dashboard
                    </h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  {/* <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                        className="bg-gray-100 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-32" />
                            <div className="h-2 bg-gray-200 rounded w-24" />
                          </div>
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Briefcase className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div> */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "Open Positions",
                        value: 24,
                        color: "bg-blue-100",
                        icon: Briefcase,
                      },
                      {
                        label: "Applications",
                        value: 87,
                        color: "bg-green-100",
                        icon: Users,
                      },
                      {
                        label: "Interviews Scheduled",
                        value: 12,
                        color: "bg-yellow-100",
                        icon: GraduationCap,
                      },
                    ].map(({ label, value, color, icon: IconComp }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.2 }}
                        className="bg-white border border-gray-200 rounded-lg px-5 py-4 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="text-lg font-semibold text-gray-800">
                              {value}
                            </p>
                          </div>
                          <div
                            className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}
                          >
                            <IconComp className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-xl shadow-lg"
              >
                <GraduationCap className="h-6 w-6" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl shadow-lg"
              >
                <Users className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
