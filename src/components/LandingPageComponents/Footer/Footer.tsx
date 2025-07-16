"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-12"
        >
          {/* Left Section - Logo + Description */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src="/images/aarambha-logo1.png"
                  alt="Aarambha Logo"
                  width={120}
                  height={120}
                  className="bg-white rounded-md"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Connecting talented professionals with amazing opportunities while
              providing world-class training to accelerate career growth.
            </p>
          </div>

          {/* Right Section - Contact + Socials */}
          <div className="space-y-6">
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@aarambhacareerservice.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, City, State 12345</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-md hover:bg-blue-600 transition"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <Separator className="my-8 bg-gray-800" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs"
        >
          © {new Date().getFullYear()} Aaarambha Career Services. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
}
