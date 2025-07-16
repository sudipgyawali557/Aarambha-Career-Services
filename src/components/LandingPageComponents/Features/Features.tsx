"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Users,
  Shield,
  CreditCard,
  Mail,
  BarChart3,
  Clock,
  Award,
  Building2,
  UserCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    category: "For Job Seekers",
    icon: Users,
    color: "bg-blue-500",
    items: [
      {
        icon: Briefcase,
        title: "Smart Job Matching",
        description:
          "AI-powered job recommendations based on your profile and preferences",
      },
      {
        icon: GraduationCap,
        title: "Skill Development",
        description:
          "Access online courses and offline training programs to boost your career",
      },
      {
        icon: Award,
        title: "Career Tracking",
        description:
          "Monitor your application history and career progress in one place",
      },
    ],
  },
  {
    category: "For Employers",
    icon: Building2,
    color: "bg-indigo-500",
    items: [
      {
        icon: UserCheck,
        title: "Talent Acquisition",
        description:
          "Post jobs and access a pool of qualified candidates instantly",
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:
          "Track job performance, applicant stats, and hiring metrics",
      },
      {
        icon: Clock,
        title: "Efficient Hiring",
        description: "Streamlined application process with automated reporting",
      },
    ],
  },
  {
    category: "Platform Features",
    icon: Zap,
    color: "bg-purple-500",
    items: [
      {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Role-based access control with enterprise-grade security",
      },
      {
        icon: CreditCard,
        title: "Integrated Payments",
        description:
          "Multiple payment gateways with coupon support for courses",
      },
      {
        icon: Mail,
        title: "Smart Notifications",
        description:
          "Automated email confirmations, invoices, and progress updates",
      },
    ],
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Comprehensive Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From job searching to skill development, our platform provides all
            the tools you need to advance your career or find the perfect
            candidates.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`${category.color} p-3 rounded-xl text-white`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <feature.icon className="h-5 w-5 text-gray-700" />
                          </div>
                          <CardTitle className="text-lg">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
