"use client";

import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <button onClick={() => signIn("google", { prompt: "login" })}>
      Sign In
    </button>
  )
}

export default SignInBtn;
