import React from "react";
import JobDetailComponent from "@/features/job-details";

export async function generateMetadata() {
  return {
    title:
      "Job Detail | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Index = () => {
  return <JobDetailComponent />;
};

export default Index;
