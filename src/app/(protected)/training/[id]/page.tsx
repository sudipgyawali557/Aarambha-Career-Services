import React from "react";
import TrainingDetilComponent from "@/features/training-details";

export async function generateMetadata() {
  return {
    title:
      "Training Detail | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Index = () => {
  return <TrainingDetilComponent />;
};

export default Index;
