"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  X,
  Send,
} from "lucide-react";

export default function JobApplication() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const [uploadedCoverLetter, setUploadedCoverLetter] = useState<File | null>(
    null
  );
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    currentPosition: "Frontend Developer",
    experience: "5 years",
    expectedSalary: "$130,000",
    availableFrom: "",
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cv" | "coverLetter"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, [type]: "File size must be less than 5MB" });
        return;
      }

      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors({
          ...errors,
          [type]: "Only PDF and Word documents are allowed",
        });
        return;
      }

      if (type === "cv") {
        setUploadedCV(file);
      } else {
        setUploadedCoverLetter(file);
      }

      // Clear any existing errors for this field
      if (errors[type]) {
        const newErrors = { ...errors };
        delete newErrors[type];
        setErrors(newErrors);
      }
    }
  };

  const removeFile = (type: "cv" | "coverLetter") => {
    if (type === "cv") {
      setUploadedCV(null);
    } else {
      setUploadedCoverLetter(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.availableFrom)
      newErrors.availableFrom = "Available start date is required";
    if (!uploadedCV) newErrors.cv = "CV/Resume is required";
    if (!agreedToTerms)
      newErrors.terms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Redirect to success page
      router.push(`/dashboard/jobs/${params.id}/apply/success`);
    } catch (error) {
      console.error("Application submission failed:", error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const completionPercentage = () => {
    let completed = 0;
    const total = 8;

    if (formData.firstName && formData.lastName) completed++;
    if (formData.email) completed++;
    if (formData.phone) completed++;
    if (formData.availableFrom) completed++;
    if (uploadedCV) completed++;
    if (formData.coverLetter || uploadedCoverLetter) completed++;
    if (formData.portfolioUrl) completed++;
    if (agreedToTerms) completed++;

    return Math.round((completed / total) * 100);
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
          Back to Job Details
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold font-heading text-gray-900 mb-2">
          Apply for Position
        </h1>
        <p className="text-gray-600">
          Senior Frontend Developer at TechCorp Inc.
        </p>

        {/* Progress */}
        {/* <div className="mt-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Application Progress</span>
            <span>{completionPercentage()}% Complete</span>
          </div>
          <Progress value={completionPercentage()} className="h-2" />
        </div> */}
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <User className="h-5 w-5 text-blue-600" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`pl-10 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`pl-10 ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    Professional Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPosition">Current Position</Label>
                      <Input
                        id="currentPosition"
                        name="currentPosition"
                        value={formData.currentPosition}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expectedSalary">Expected Salary</Label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availableFrom">Available From *</Label>
                      <Input
                        id="availableFrom"
                        name="availableFrom"
                        type="date"
                        value={formData.availableFrom}
                        onChange={handleInputChange}
                        className={errors.availableFrom ? "border-red-500" : ""}
                      />
                      {errors.availableFrom && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.availableFrom}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                    <Input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      type="url"
                      placeholder="https://your-portfolio.com"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                      <Input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="githubUrl">GitHub Profile</Label>
                      <Input
                        id="githubUrl"
                        name="githubUrl"
                        type="url"
                        placeholder="https://github.com/yourusername"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* CV Upload */}
                  <div className="space-y-2">
                    <Label>CV/Resume *</Label>
                    {uploadedCV ? (
                      <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium text-green-900">
                              {uploadedCV.name}
                            </p>
                            <p className="text-sm text-green-600">
                              {(uploadedCV.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile("cv")}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Drop your CV here or click to browse
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          PDF, DOC, DOCX up to 5MB
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, "cv")}
                          className="hidden"
                          id="cv-upload"
                        />
                        <Button type="button" variant="outline" asChild>
                          <label htmlFor="cv-upload" className="cursor-pointer">
                            Choose File
                          </label>
                        </Button>
                      </div>
                    )}
                    {errors.cv && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.cv}
                      </p>
                    )}
                  </div>

                  {/* Cover Letter Upload */}
                  <div className="space-y-2">
                    <Label>Cover Letter (Optional)</Label>
                    {uploadedCoverLetter ? (
                      <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-900">
                              {uploadedCoverLetter.name}
                            </p>
                            <p className="text-sm text-blue-600">
                              {(uploadedCoverLetter.size / 1024 / 1024).toFixed(
                                2
                              )}{" "}
                              MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile("coverLetter")}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <FileText className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">
                          Upload cover letter
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, "coverLetter")}
                          className="hidden"
                          id="cover-letter-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <label
                            htmlFor="cover-letter-upload"
                            className="cursor-pointer"
                          >
                            Choose File
                          </label>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Cover Letter Text */}
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">
                      Or write your cover letter here
                    </Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="min-h-[120px]"
                      rows={6}
                    />
                    <p className="text-xs text-gray-500">
                      {formData.coverLetter.length}/1000 characters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">
                    Application Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Position:</span>
                      <span className="font-medium">
                        Senior Frontend Developer
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium">TechCorp Inc.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">San Francisco, CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium">Full-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Salary:</span>
                      <span className="font-medium">$120,000 - $150,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="font-heading text-blue-900">
                    Application Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-blue-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Tailor your CV to highlight relevant experience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Write a compelling cover letter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Include links to your portfolio and LinkedIn</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Double-check all information before submitting</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Terms and Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => {
                setAgreedToTerms(checked as boolean);
                if (errors.terms) {
                  const newErrors = { ...errors };
                  delete newErrors.terms;
                  setErrors(newErrors);
                }
              }}
              className="mt-1"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that the information provided is accurate and I agree
                to the{" "}
                <a
                  href="/terms"
                  className="text-blue-600 hover:underline font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:underline font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.terms}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Submit Application
                </div>
              )}
            </Button>
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm flex items-center gap-1 justify-center">
              <AlertCircle className="w-4 h-4" />
              {errors.submit}
            </p>
          )}
        </motion.div>
      </form>
    </div>
  );
}
