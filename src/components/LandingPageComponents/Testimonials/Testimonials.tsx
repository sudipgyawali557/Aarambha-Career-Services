"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Found my dream job within 2 weeks! The platform's matching algorithm is incredibly accurate, and the training courses helped me upskill for the role.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "HR Director",
    company: "InnovateLabs",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "As an employer, this platform has streamlined our hiring process. The quality of candidates and the analytics dashboard are exceptional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "GrowthCo",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The offline training programs are top-notch. I completed a digital marketing course that directly led to my promotion. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen Solutions",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Perfect platform for finding talented developers. The application tracking and reporting features save us hours of administrative work.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Data Analyst",
    company: "DataDriven Inc",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The career guidance and skill assessment tools helped me transition from finance to tech. The support throughout the journey was amazing.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiFlow",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Excellent platform for both job searching and team building. The payment integration for courses is seamless, and the content quality is outstanding.",
    rating: 5,
  },
];

export function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what professionals
            and companies are saying about their experience with our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-100">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
