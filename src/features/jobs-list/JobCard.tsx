"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  ExternalLink,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  logo: string;
  featured: boolean;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Card
        className={`hover:shadow-lg transition-all duration-300 border-l-4 ${
          job.featured
            ? "border-l-blue-500 bg-blue-50/30"
            : "border-l-transparent"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              {/* Company Logo */}
              <Avatar className="h-16 w-16 rounded-lg">
                <AvatarImage
                  src={job.logo || "/placeholder.svg"}
                  alt={job.company}
                />
                <AvatarFallback className="rounded-lg bg-gray-100 text-gray-600 font-semibold">
                  {job.company.charAt(0)}
                </AvatarFallback>
              </Avatar>

              {/* Job Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-gray-900 hover:text-blue-600 transition-colors">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        {job.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>
                </div>

                {/* Job Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {job.type}
                  </Badge>
                </div>

                {/* Job Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.slice(0, 4).map((req, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                  {job.requirements.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{job.requirements.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 flex-shrink-0">
              <Link href={`/dashboard/jobs/${job.id}`}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
