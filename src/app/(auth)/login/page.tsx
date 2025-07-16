import React from "react";
import LoginComponent from "@/features/login";

export async function generateMetadata() {
  return {
    title:
      "Login | Aarambha Career Services - Find Your Dream Job & Master New Skills",
  };
}
const Login = () => {
  return <LoginComponent />;
};

export default Login;
