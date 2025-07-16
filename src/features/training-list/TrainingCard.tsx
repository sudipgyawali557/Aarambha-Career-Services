"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  Bookmark,
  Play,
} from "lucide-react";

interface Training {
  id: number;
  title: string;
  subtitle: string;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  schedule: {
    startDate: string;
    endDate: string;
    time: string;
    sessions: number;
    duration: string;
  };
  venue: string;
  registrationDeadline: string;
  price: {
    registered: number;
    nonRegistered: number;
    original: number;
  };
  category: string;
  level: string;
  rating: number;
  enrolled: number;
  featured: boolean;
  status: string;
}

interface TrainingCardProps {
  course: Training;
}

export function TrainingCard({ course }: TrainingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-700";
      case "ongoing":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group"
    >
      <Card
        className={`h-full overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
          course.featured
            ? "border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"
            : "hover:border-blue-200"
        }`}
      >
        <CardContent className="p-0">
          {/* Header with gradient background */}
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400')] opacity-10" />

            {/* Status and Featured badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge
                className={`${getStatusColor(course.status)} backdrop-blur-sm`}
              >
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </Badge>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold font-heading mb-2 line-clamp-2 group-hover:text-blue-100 transition-colors">
                {course.title}
              </h3>
              <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                {course.subtitle}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-white/20">
                  <AvatarImage
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                  />
                  <AvatarFallback className="bg-white/20 text-white font-semibold">
                    {course.instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">
                    {course.instructor.name}
                  </p>
                  <p className="text-blue-100 text-sm">
                    {course.instructor.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Schedule Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="font-medium">{course.schedule.startDate}</p>
                  <p className="text-xs">to {course.schedule.endDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4 text-green-500" />
                <div>
                  <p className="font-medium">{course.schedule.time}</p>
                  <p className="text-xs">{course.schedule.duration}</p>
                </div>
              </div>
            </div>

            {/* Venue and Sessions */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span className="truncate">{course.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="h-4 w-4 text-orange-500" />
                <span>{course.schedule.sessions} Sessions</span>
              </div>
            </div>

            {/* Category and Level */}
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {course.category}
              </Badge>
              <Badge className={`text-xs ${getLevelColor(course.level)}`}>
                {course.level}
              </Badge>
            </div>

            {/* Rating and Enrollment */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500">
                  ({course.enrolled} enrolled)
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Users className="h-4 w-4" />
                <span>{course.enrolled}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    For Registered Members
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">
                      NPR {course.price.registered.toLocaleString()}
                    </span>
                    {course.price.registered < course.price.original && (
                      <span className="text-sm text-gray-500 line-through">
                        NPR {course.price.original.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                {course.price.registered < course.price.original && (
                  <Badge className="bg-green-100 text-green-700">
                    Save{" "}
                    {Math.round(
                      ((course.price.original - course.price.registered) /
                        course.price.original) *
                        100
                    )}
                    %
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Non-registered: NPR{" "}
                {course.price.nonRegistered.toLocaleString()}
              </p>
            </div>

            {/* Registration Deadline */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <p className="text-sm text-orange-800">
                <strong>Registration Deadline:</strong>{" "}
                {course.registrationDeadline}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                asChild
                className="flex-1 bg-blue-600 hover:bg-blue-700 group"
              >
                <Link href={`/training/${course.id}`}>
                  <Play className="h-4 w-4 mr-2" />
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
