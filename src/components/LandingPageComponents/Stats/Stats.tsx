"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "10,000+",
    label: "Active Job Seekers",
    description: "Professionals actively looking for opportunities",
  },
  {
    number: "500+",
    label: "Partner Companies",
    description: "Trusted employers posting quality jobs",
  },
  {
    number: "1,200+",
    label: "Jobs Posted",
    description: "Fresh opportunities added weekly",
  },
  {
    number: "50+",
    label: "Training Courses",
    description: "Online and offline skill development programs",
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Job seekers finding employment within 3 months",
  },
  {
    number: "24/7",
    label: "Platform Support",
    description: "Round-the-clock assistance and guidance",
  },
];

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a thriving community of professionals and companies who have
            found success through our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-6 bg-white/80 h-[200px] backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
