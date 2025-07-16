"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building2,
  Calendar,
  Share2,
  Bookmark,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Mock job data (in real app, this would come from API)
const mockJob = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$120,000 - $150,000",
  postedDate: "2 days ago",
  description: `We're looking for a Senior Frontend Developer to join our growing team and help build the next generation of our web applications. You'll work closely with our design and backend teams to create exceptional user experiences.

As a Senior Frontend Developer, you'll be responsible for developing and maintaining our React-based applications, implementing responsive designs, and ensuring optimal performance across all devices.

This is an excellent opportunity to work with cutting-edge technologies and make a significant impact on our product development.`,
  requirements: [
    "5+ years of experience in frontend development",
    "Expert knowledge of React and TypeScript",
    "Experience with Next.js and modern build tools",
    "Strong understanding of responsive design principles",
    "Experience with state management (Redux, Zustand, etc.)",
    "Knowledge of testing frameworks (Jest, React Testing Library)",
    "Familiarity with CI/CD pipelines",
    "Excellent communication and collaboration skills",
  ],
  responsibilities: [
    "Develop and maintain React-based web applications",
    "Collaborate with designers to implement pixel-perfect UI components",
    "Optimize applications for maximum speed and scalability",
    "Write clean, maintainable, and well-documented code",
    "Participate in code reviews and mentor junior developers",
    "Stay up-to-date with the latest frontend technologies and best practices",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote work options",
    "Professional development budget",
    "Unlimited PTO policy",
    "Modern office with free meals and snacks",
    "Team building events and company retreats",
  ],
  companyInfo: {
    name: "TechCorp Inc.",
    size: "200-500 employees",
    industry: "Technology",
    founded: "2015",
    description:
      "TechCorp is a leading technology company focused on building innovative solutions for modern businesses.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  logo: "/placeholder.svg?height=60&width=60",
  featured: true,
};

export default function JobDetail() {
  const params = useParams();
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleApply = () => {
    router.push(`/dashboard/jobs/${params.id}/apply`);
  };

  return (
    <div className="container px-4 mx-auto space-y-6">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Button>
      </motion.div>

      {/* Job Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-8">
            <div className="flex items-start flex-wrap justify-between gap-6">
              <div className="flex items-start gap-6 flex-wrap flex-1">
                <Avatar className="h-20 w-20 rounded-xl">
                  <AvatarImage
                    src={mockJob.logo || "/placeholder.svg"}
                    alt={mockJob.company}
                  />
                  <AvatarFallback className="rounded-xl bg-gray-100 text-gray-600 font-semibold text-lg">
                    {mockJob.company.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h1 className="md:text-3xl font-bold font-heading text-gray-900 mb-2">
                        {mockJob.title}
                      </h1>
                      <p className="text-xl text-gray-600 font-medium">
                        {mockJob.company}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 w-full">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4">
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="whitespace-nowrap">
                        {mockJob.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4">
                        <Clock className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="whitespace-nowrap">
                        {mockJob.postedDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-4">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="whitespace-nowrap">
                        {mockJob.salary}
                      </span>
                    </div>
                    <div className="w-full">
                      <Badge variant="outline" className="w-fit">
                        {mockJob.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleApply}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {mockJob.description.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Key Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockJob.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  About {mockJob.companyInfo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 rounded-xl">
                    <AvatarImage
                      src={mockJob.companyInfo.logo || "/placeholder.svg"}
                      alt={mockJob.companyInfo.name}
                    />
                    <AvatarFallback className="rounded-xl bg-gray-100 text-gray-600 font-semibold">
                      {mockJob.companyInfo.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold font-heading text-gray-900">
                      {mockJob.companyInfo.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {mockJob.companyInfo.industry}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {mockJob.companyInfo.description}
                </p>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">
                      {mockJob.companyInfo.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">
                      {mockJob.companyInfo.industry}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">
                      Founded in {mockJob.companyInfo.founded}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold font-heading text-gray-900 mb-2">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Don&apos;t miss out on this opportunity. Apply now and take
                  the next step in your career.
                </p>
                <Button
                  onClick={handleApply}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Apply for this Position
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
