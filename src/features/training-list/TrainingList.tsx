"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, BookOpen, Clock, Users, Star } from "lucide-react";
import { TrainingCard } from "./TrainingCard";

// Mock training data
const mockTrainings = [
  {
    id: 1,
    title: "Training on आर्थिक विधेयक २०८२",
    subtitle:
      "Applicable changes in various acts amended through the Finance Bill 2082",
    instructor: {
      name: "Mr Prabin Raj Kafle",
      title: "Fellow Chartered Accountant (FCA)",
      image: "/placeholder.svg?height=80&width=80",
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
    featured: true,
    status: "upcoming",
  },
  {
    id: 2,
    title: "NAS for NPOs Training",
    subtitle:
      "Nepal Accounting Standards for Non-Profit Organizations - 2nd Batch",
    instructor: {
      name: "Sagar Dhital",
      title: "Training and Development Unit",
      image: "/placeholder.svg?height=80&width=80",
    },
    schedule: {
      startDate: "15th Aug, 2025",
      endDate: "17th Aug, 2025",
      time: "6:00 PM to 8:00 PM",
      sessions: 3,
      duration: "6 Hours",
    },
    venue: "Virtual / Online via Zoom",
    registrationDeadline: "14th Aug, 2025",
    price: {
      registered: 1299,
      nonRegistered: 1999,
      original: 1999,
    },
    category: "Accounting Standards",
    level: "Advanced",
    rating: 4.9,
    enrolled: 189,
    featured: false,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    subtitle: "Complete guide to modern digital marketing strategies and tools",
    instructor: {
      name: "Sarah Johnson",
      title: "Digital Marketing Expert",
      image: "/placeholder.svg?height=80&width=80",
    },
    schedule: {
      startDate: "5th Aug, 2025",
      endDate: "12th Aug, 2025",
      time: "7:30 PM to 9:30 PM",
      sessions: 8,
      duration: "16 Hours",
    },
    venue: "Virtual / Online via Zoom",
    registrationDeadline: "4th Aug, 2025",
    price: {
      registered: 2499,
      nonRegistered: 3499,
      original: 3499,
    },
    category: "Marketing",
    level: "Beginner",
    rating: 4.7,
    enrolled: 312,
    featured: true,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Python for Data Science",
    subtitle: "Learn Python programming for data analysis and machine learning",
    instructor: {
      name: "Michael Chen",
      title: "Senior Data Scientist",
      image: "/placeholder.svg?height=80&width=80",
    },
    schedule: {
      startDate: "1st Aug, 2025",
      endDate: "15th Aug, 2025",
      time: "8:00 PM to 10:00 PM",
      sessions: 15,
      duration: "30 Hours",
    },
    venue: "Virtual / Online via Zoom",
    registrationDeadline: "31st July, 2025",
    price: {
      registered: 3999,
      nonRegistered: 5499,
      original: 5499,
    },
    category: "Technology",
    level: "Intermediate",
    rating: 4.9,
    enrolled: 156,
    featured: false,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Project Management Professional",
    subtitle:
      "PMP certification preparation and project management best practices",
    instructor: {
      name: "David Wilson",
      title: "PMP Certified Project Manager",
      image: "/placeholder.svg?height=80&width=80",
    },
    schedule: {
      startDate: "10th July, 2025",
      endDate: "25th July, 2025",
      time: "6:30 PM to 8:30 PM",
      sessions: 12,
      duration: "24 Hours",
    },
    venue: "Virtual / Online via Zoom",
    registrationDeadline: "9th July, 2025",
    price: {
      registered: 4999,
      nonRegistered: 6999,
      original: 6999,
    },
    category: "Management",
    level: "Advanced",
    rating: 4.8,
    enrolled: 98,
    featured: true,
    status: "ongoing",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    subtitle:
      "Master the principles of user interface and user experience design",
    instructor: {
      name: "Emily Rodriguez",
      title: "Senior UX Designer",
      image: "/placeholder.svg?height=80&width=80",
    },
    schedule: {
      startDate: "20th July, 2025",
      endDate: "3rd Aug, 2025",
      time: "7:00 PM to 9:00 PM",
      sessions: 10,
      duration: "20 Hours",
    },
    venue: "Virtual / Online via Zoom",
    registrationDeadline: "19th July, 2025",
    price: {
      registered: 2999,
      nonRegistered: 4299,
      original: 4299,
    },
    category: "Design",
    level: "Beginner",
    rating: 4.6,
    enrolled: 203,
    featured: false,
    status: "upcoming",
  },
];

const COURSES_PER_PAGE = 6;

export default function CoursesPage() {
  const [courses, setCourses] = useState(mockTrainings);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Filter courses based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    const matchesStatus =
      statusFilter === "all" || course.status === statusFilter;

    return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + COURSES_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, levelFilter, statusFilter]);

  const handleSearch = (term: string) => {
    setIsLoading(true);
    setSearchTerm(term);
    setTimeout(() => setIsLoading(false), 500);
  };

  const categories = [
    "all",
    "Finance & Taxation",
    "Accounting Standards",
    "Marketing",
    "Technology",
    "Management",
    "Design",
  ];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const statuses = ["all", "upcoming", "ongoing", "completed"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold font-heading text-gray-900">
            Training Courses
          </h1>
          <p className="text-gray-600 mt-2">
            Enhance your skills with our professional training programs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            {filteredCourses.length} Courses Available
          </Badge>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          {
            icon: BookOpen,
            label: "Total Courses",
            value: courses.length,
            color: "bg-blue-500",
          },
          {
            icon: Clock,
            label: "Ongoing",
            value: courses.filter((c) => c.status === "ongoing").length,
            color: "bg-green-500",
          },
          {
            icon: Users,
            label: "Total Students",
            value: "1.2K+",
            color: "bg-purple-500",
          },
          {
            icon: Star,
            label: "Avg Rating",
            value: "4.8",
            color: "bg-orange-500",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <div className="flex items-center gap-3">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold font-heading text-gray-900">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Level Filter */}
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level === "all" ? "All Levels" : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status === "all"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border p-6 animate-pulse"
              >
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-20 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TrainingCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12 bg-white rounded-xl shadow-sm border"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setLevelFilter("all");
                setStatusFilter("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 ${
                  currentPage === page ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
