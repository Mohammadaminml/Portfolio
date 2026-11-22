"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/admin-auth";

async function requireAdmin(): Promise<void> {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }
}

function parseList(value: FormDataEntryValue | null): string[] {
  if (!value) return [];
  return value
    .toString()
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCommaList(value: FormDataEntryValue | null): string[] {
  if (!value) return [];
  return value
    .toString()
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function extractProjectData(formData: FormData) {
  return {
    slug: formData.get("slug")?.toString().trim() ?? "",
    index: formData.get("index")?.toString().trim() ?? "01",
    title: formData.get("title")?.toString().trim() ?? "",
    eyebrow: formData.get("eyebrow")?.toString().trim() ?? "",
    summary: formData.get("summary")?.toString().trim() ?? "",
    description: formData.get("description")?.toString().trim() ?? "",
    role: formData.get("role")?.toString().trim() ?? "",
    scope: formData.get("scope")?.toString().trim() ?? "",
    tech: parseCommaList(formData.get("tech")),
    challenge: formData.get("challenge")?.toString().trim() ?? "",
    solution: formData.get("solution")?.toString().trim() ?? "",
    decisions: parseList(formData.get("decisions")),
    outcomes: parseList(formData.get("outcomes")),
    accent: formData.get("accent")?.toString().trim() || "blue",
    image: formData.get("image")?.toString().trim() ?? "",
    imageAlt: formData.get("imageAlt")?.toString().trim() ?? "",
    liveUrl: formData.get("liveUrl")?.toString().trim() || null,
    githubUrl: formData.get("githubUrl")?.toString().trim() || null,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
    published: formData.get("published") === "on",
  };
}

export async function createProjectAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const data = extractProjectData(formData);
  await prisma.project.create({ data });
  revalidatePath("/admin");
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function updateProjectAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireAdmin();
  const data = extractProjectData(formData);
  await prisma.project.update({ where: { id }, data });
  revalidatePath("/admin");
  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function deleteProjectAction(id: string): Promise<void> {
  await requireAdmin();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/", "layout");
}

export async function togglePublishAction(
  id: string,
  currentState: boolean
): Promise<void> {
  await requireAdmin();
  await prisma.project.update({
    where: { id },
    data: { published: !currentState },
  });
  revalidatePath("/admin");
  revalidatePath("/", "layout");
}