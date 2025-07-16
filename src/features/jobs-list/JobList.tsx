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
import { Search, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { JobCard } from "./JobCard";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    postedDate: "2 days ago",
    description:
      "We're looking for a Senior Frontend Developer to join our growing team...",
    requirements: ["React", "TypeScript", "Next.js", "5+ years experience"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    postedDate: "1 week ago",
    description: "Join our product team to drive innovation and growth...",
    requirements: [
      "Product Management",
      "Analytics",
      "Leadership",
      "3+ years experience",
    ],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80,000 - $100,000",
    postedDate: "3 days ago",
    description: "Create beautiful and intuitive user experiences...",
    requirements: [
      "Figma",
      "Adobe Creative Suite",
      "User Research",
      "4+ years experience",
    ],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    postedDate: "5 days ago",
    description: "Build scalable backend systems and APIs...",
    requirements: [
      "Node.js",
      "Python",
      "AWS",
      "Database Design",
      "5+ years experience",
    ],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "GrowthCo",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    postedDate: "1 week ago",
    description: "Lead our marketing initiatives and drive brand growth...",
    requirements: [
      "Digital Marketing",
      "SEO/SEM",
      "Analytics",
      "Team Leadership",
      "4+ years experience",
    ],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    postedDate: "4 days ago",
    description: "Manage cloud infrastructure and deployment pipelines...",
    requirements: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "6+ years experience",
    ],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
  },
];

const JOBS_PER_PAGE = 4;

export default function Dashboard() {
  const [jobs, setJobs] = useState(mockJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === "all" || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  });

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationFilter, typeFilter]);

  const handleSearch = (term: string) => {
    setIsLoading(true);
    setSearchTerm(term);
    // Simulate API call delay
    setTimeout(() => setIsLoading(false), 500);
  };

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
            Find Your Dream Job
          </h1>
          <p className="text-gray-600 mt-2">
            Discover opportunities that match your skills and interests
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            {filteredJobs.length} Jobs Available
          </Badge>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search jobs or companies..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Location Filter */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
            <Input
              placeholder="Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Job Type Filter */}
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Job Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          {
            icon: Briefcase,
            label: "Total Jobs",
            value: jobs.length,
            color: "bg-blue-500",
          },
          {
            icon: Clock,
            label: "New This Week",
            value: "12",
            color: "bg-green-500",
          },
          {
            icon: MapPin,
            label: "Remote Jobs",
            value: "8",
            color: "bg-purple-500",
          },
          {
            icon: DollarSign,
            label: "Avg Salary",
            value: "$115K",
            color: "bg-orange-500",
          },
        ].map((stat, index) => (
          <div
            key={stat.label}
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
          </div>
        ))}
      </motion.div>

      {/* Job Listings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4"
      >
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border p-6 animate-pulse"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-3 bg-gray-200 rounded w-1/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : paginatedJobs.length > 0 ? (
          <div className="space-y-4">
            {paginatedJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <JobCard job={job} />
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
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setLocationFilter("");
                setTypeFilter("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
