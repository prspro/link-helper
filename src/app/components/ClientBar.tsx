"use client"

import { useSession, signIn, signOut } from 'next-auth/react'

const handleSignIn = async () => {
  await signIn('google', { prompt: 'login' });
};

const ClientBar = () => {
  const { status } = useSession();
  return (
    <div>
      {
        status === "authenticated" ?
          <button onClick={() => signOut()}>Sign Out</button> :
          <button onClick={handleSignIn}>Sign In</button>
      }
    </div>
  )
}

export default ClientBar;
