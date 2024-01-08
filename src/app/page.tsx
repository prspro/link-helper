"use client"
import ClientBar from './components/ClientBar'
import styles from './page.module.css'
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: sessionData} = useSession();

  return (
    <main className={styles.main}>
      <p>
        Test login
      </p>
      <p>User: {sessionData?.user?.email}</p>
      <ClientBar />
    </main>
  )
}
