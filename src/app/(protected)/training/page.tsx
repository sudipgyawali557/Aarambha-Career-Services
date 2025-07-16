import React from "react";
import TrainingListComponent from "@/features/training-list";

export async function generateMetadata() {
  return {
    title:
      "Training  | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Index = () => {
  return <TrainingListComponent />;
};

export default Index;
