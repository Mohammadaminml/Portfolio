"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/fa");
  }, [router]);

  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/fa" />
      <main className="grid min-h-screen place-items-center">
        <p className="text-sm text-neutral-400">در حال انتقال...</p>
      </main>
    </>
  );
}