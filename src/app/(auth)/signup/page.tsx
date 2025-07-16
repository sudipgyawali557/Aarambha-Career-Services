import React from "react";
import SignUpComponent from "@/features/signup";

export async function generateMetadata() {
  return {
    title:
      "Sign Up | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Login = () => {
  return <SignUpComponent />;
};

export default Login;
