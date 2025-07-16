import React from "react";
import ApplyJobComponent from "@/features/apply-job";

export async function generateMetadata() {
  return {
    title:
      "Apply Job | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Index = () => {
  return <ApplyJobComponent />;
};

export default Index;
