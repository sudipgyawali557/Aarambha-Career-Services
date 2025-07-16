"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  Shield,
  Heart,
  Zap,
  TrendingUp,
} from "lucide-react";

const stats = [
  { number: "50,000+", label: "Active Users", icon: Users },
  { number: "1,200+", label: "Jobs Posted", icon: Briefcase },
  { number: "500+", label: "Companies", icon: Globe },
  { number: "50+", label: "Training Courses", icon: GraduationCap },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're committed to connecting talent with opportunity and empowering career growth.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your data and privacy are our top priority with enterprise-grade security.",
  },
  {
    icon: Heart,
    title: "People-First",
    description:
      "Every feature we build is designed with our users' success and experience in mind.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously evolve our platform with cutting-edge technology and features.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description:
      "Former VP of Talent at TechCorp with 15+ years in HR and recruitment.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description:
      "Ex-Google engineer passionate about building scalable platforms.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    description: "Product leader with expertise in user experience and growth.",
  },
  {
    name: "David Kim",
    role: "Head of Training",
    description: "Education specialist with 20+ years in corporate training.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Aaarambha Career Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Empowering Careers,{" "}
            <span className="gradient-text">Transforming Lives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re on a mission to bridge the gap between talent and
            opportunity while providing world-class training to help
            professionals thrive in their careers.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-100">
                <CardContent className="space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold font-heading gradient-text">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-heading text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, Aaarambha Career Services was born from a
                simple observation: the job market was fragmented, and
                professionals lacked access to quality training that could
                advance their careers.
              </p>
              <p>
                Our founders, having experienced the challenges of both job
                searching and hiring, set out to create a comprehensive platform
                that would serve job seekers, employers, and those looking to
                upskill.
              </p>
              <p>
                Today, we&apos;re proud to have helped thousands of
                professionals find their dream jobs and advance their careers
                through our training programs.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-gray-900">
                      95% Success Rate
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Job placement within 3 months
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-gray-900">
                      Industry Recognition
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Best Job Platform 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-gray-900">
                      Growing Community
                    </h4>
                    <p className="text-gray-600 text-sm">
                      50,000+ active members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">
            Our Values
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our
            platform&apos;s future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-100">
                <CardContent className="space-y-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold font-heading text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">
            Meet Our Team
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals working to transform the way people find
            jobs and develop their careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg min-h-[400px] h-full transition-all duration-300 border-2 hover:border-blue-100">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold font-heading text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
