"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession } from "@/lib/admin-auth";

export async function loginAction(formData: FormData): Promise<void> {
  const password = formData.get("password")?.toString() ?? "";

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await clearAdminSession();
  redirect("/admin/login");
}