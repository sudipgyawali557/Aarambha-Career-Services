"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  BookOpen,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Award,
} from "lucide-react";

// Mock course data (in real app, this would come from API)
const mockCourse = {
  id: 1,
  title: "Training on आर्थिक विधेयक २०८२",
  subtitle:
    "Applicable changes in various acts amended through the Finance Bill 2082",
  instructor: {
    name: "Mr Prabin Raj Kafle",
    title: "Fellow Chartered Accountant (FCA)",
    image: "/placeholder.svg?height=120&width=120",
    bio: "Mr Prabin Raj Kafle is a Fellow Chartered Accountant (FCA) and a member of the Institute of Chartered Accountants of Nepal (ICAN). He achieved an 'All India Merit Rank' in the Professional Examination Course conducted by ICAI and is a Certified Instructor Member of ICAN. With over 14 years of post-qualification experience in Accounts, Finance, and Taxation, Mr Kafle has undertaken various assignments in management consulting, internal audit, statutory audit, bookkeeping, payroll maintenance, and more, both nationally and internationally.",
    experience: "14+ years",
    specialization: "Finance, Taxation & Audit",
  },
  schedule: {
    startDate: "28th July, 2025",
    endDate: "30th July, 2025",
    time: "7:00 PM to 9:00 PM",
    sessions: 3,
    duration: "6 Hours",
  },
  venue: "Virtual / Online via Zoom",
  registrationDeadline: "27th July, 2025",
  price: {
    registered: 1499,
    nonRegistered: 2499,
    original: 2499,
  },
  category: "Finance & Taxation",
  level: "Intermediate",
  rating: 4.8,
  enrolled: 245,
  maxCapacity: 500,
  featured: true,
  status: "upcoming",
  overview: `Taxes are payments made by individuals and businesses to the government. These funds are used to provide important services and infrastructure development across local, provincial, and national levels. Being tax-compliant means following all the rules—filing returns properly, paying taxes on time, and using any tax benefits correctly.

With the recent Budget announcement for Income Year 2082/83, several new and progressive changes have been made through the Finance Bill 2082. When implemented, these updates can help promote economic growth and make the tax process easier and fairer for everyone.

This training is designed to help participants clearly understand the key principles of income tax and the major updates introduced through the Finance Bill 2082. The sessions will provide practical insights into how these changes affect individuals, businesses, and overall tax compliance.`,
  whoShouldAttend:
    "This training is for Accounts Officers, Finance Managers, and similar roles in banks, financial institutions, public and private companies, and NGO/INGOs involved in tax and financial compliance.",
  courseContent: {
    day1: {
      title: "Day 1",
      topics: [
        "Brief overview of Budget 2082/83",
        "Amenities provided by the Finance Bill, 2082 to various sectors",
      ],
    },
    day2: {
      title: "Day 2",
      topics: [
        "Amendments by Finance Bill, 2082 in Income Tax Act, 2058",
        "Amendments by Finance Bill, 2082 in VAT Act, 2052",
      ],
    },
    day3: {
      title: "Day 3",
      topics: [
        "Amendments by Finance Bill, 2082 in the Custom Duty Act, 2061",
        "Amendments by Finance Bill, 2082 in Excise Act, 2058",
        "Other Taxes levied by the Finance Bill, 2082, such as Luxury Tax, Education Service Tax, Employment Service Tax and so on.",
      ],
    },
  },
  methodology: [
    "Virtual Session presented by Trainer",
    "The training will be delivered using PowerPoint presentations",
    "Real-life examples and case studies will be used to explain key tax concepts",
    "Q&A sessions at the end of the session to make it more interactive",
    "Practical and Engaging",
  ],
  paymentOptions: [
    "Online payment through the merojob website, bank and QR",
    "Payment once done is non-refundable",
  ],
  afterCompletion: [
    "All participants will receive supporting materials and handouts for future reference",
    "Recorded videos will be provided, with a validity period of 3 months from the training date",
    "Continued support from the resource person",
    "A soft copy of the Certificate of Participation will be provided",
    "Training certificate shall be provided within 6 working days upon full attendance",
  ],
};

export default function TrainingDetail() {
  const params = useParams();
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const enrollmentPercentage =
    (mockCourse.enrolled / mockCourse.maxCapacity) * 100;

  const handleEnroll = () => {
    // router.push(`/dashboard/courses/${params.id}/enroll`);
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "content", label: "Course Content" },
    { id: "instructor", label: "Instructor" },
    { id: "details", label: "Details" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
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
          Back to Training
        </Button>
      </motion.div>

      {/* Course Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10" />

          <div className="relative z-10 p-8 text-white">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-green-100 text-green-700">
                    {mockCourse.status.charAt(0).toUpperCase() +
                      mockCourse.status.slice(1)}
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold font-heading mb-3 leading-tight">
                  {mockCourse.title}
                </h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  {mockCourse.subtitle}
                </p>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">
                        {mockCourse.schedule.startDate}
                      </p>
                      <p className="text-blue-200">
                        to {mockCourse.schedule.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">{mockCourse.schedule.time}</p>
                      <p className="text-blue-200">
                        {mockCourse.schedule.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">Virtual</p>
                      <p className="text-blue-200">Online via Zoom</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">
                        {mockCourse.schedule.sessions} Sessions
                      </p>
                      <p className="text-blue-200">Total Duration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-white/20">
                    <AvatarImage
                      src={mockCourse.instructor.image || "/placeholder.svg"}
                      alt={mockCourse.instructor.name}
                    />
                    <AvatarFallback className="bg-white/20 text-white font-semibold text-lg">
                      {mockCourse.instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {mockCourse.instructor.name}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {mockCourse.instructor.title}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-blue-100 text-sm mb-1">
                    For Registered Members
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white">
                      NPR {mockCourse.price.registered.toLocaleString()}
                    </span>
                    {mockCourse.price.registered <
                      mockCourse.price.original && (
                      <span className="text-sm text-blue-200 line-through">
                        NPR {mockCourse.price.original.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-blue-200">
                    Non-registered: NPR{" "}
                    {mockCourse.price.nonRegistered.toLocaleString()}
                  </p>
                </div>

                {/* Enrollment Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-100">Enrolled</span>
                    <span className="text-white font-medium">
                      {mockCourse.enrolled}/{mockCourse.maxCapacity}
                    </span>
                  </div>
                  {/* <Progress
                    value={enrollmentPercentage}
                    className="h-2 bg-white/20"
                  /> */}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={handleEnroll}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Enroll Now
                  </Button>
                </div>

                {/* Registration Deadline */}
                <div className="mt-4 bg-orange-500/20 border border-orange-300/30 rounded-lg p-3">
                  <p className="text-orange-100 text-sm">
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    <strong>Registration Deadline:</strong>{" "}
                    {mockCourse.registrationDeadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          {
            icon: Star,
            label: "Rating",
            value: mockCourse.rating,
            color: "bg-yellow-500",
          },
          {
            icon: Users,
            label: "Enrolled",
            value: mockCourse.enrolled,
            color: "bg-green-500",
          },
          {
            icon: BookOpen,
            label: "Sessions",
            value: mockCourse.schedule.sessions,
            color: "bg-blue-500",
          },
          {
            icon: Clock,
            label: "Duration",
            value: mockCourse.schedule.duration,
            color: "bg-purple-500",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border p-6 text-center"
          >
            <div
              className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
            >
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold font-heading text-gray-900">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                    Overview
                  </h3>
                  <div className="prose prose-gray max-w-none">
                    {mockCourse.overview
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                    Who Should Attend
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mockCourse.whoShouldAttend}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "content" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-6">
                  Course Content
                </h3>

                <div className="space-y-6">
                  {Object.entries(mockCourse.courseContent).map(
                    ([key, day], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <h4 className="text-lg font-semibold font-heading text-gray-900 mb-4">
                          {day.title}
                        </h4>
                        <ul className="space-y-2">
                          {day.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )
                  )}
                </div>

                <Separator />

                <div>
                  <h4 className="text-lg font-semibold font-heading text-gray-900 mb-4">
                    Methodology of Training
                  </h4>
                  <ul className="space-y-2">
                    {mockCourse.methodology.map((method, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-gray-600">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === "instructor" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24 border-4 border-gray-100">
                    <AvatarImage
                      src={mockCourse.instructor.image || "/placeholder.svg"}
                      alt={mockCourse.instructor.name}
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold text-2xl">
                      {mockCourse.instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                      {mockCourse.instructor.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium mb-4">
                      {mockCourse.instructor.title}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Experience
                          </p>
                          <p className="text-gray-600">
                            {mockCourse.instructor.experience}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Specialization
                          </p>
                          <p className="text-gray-600">
                            {mockCourse.instructor.specialization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <h4 className="text-lg font-semibold font-heading text-gray-900 mb-4">
                    About the Instructor
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {mockCourse.instructor.bio}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                    Payment Options
                  </h3>
                  <ul className="space-y-2">
                    {mockCourse.paymentOptions.map((option, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                    After Completion of this Course
                  </h3>
                  <ul className="space-y-2">
                    {mockCourse.afterCompletion.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold font-heading text-blue-900 mb-3">
                    Important Notes
                  </h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>
                      • Training certificate shall be provided within 6 working
                      days upon full attendance
                    </li>
                    <li>
                      • All sessions will be recorded and available for 3 months
                    </li>
                    <li>• Interactive Q&A sessions included</li>
                    <li>• Supporting materials and handouts provided</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
