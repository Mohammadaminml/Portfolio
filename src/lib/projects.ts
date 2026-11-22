import { prisma } from "@/lib/prisma";
import type { Project } from "@prisma/client";

export async function getPublishedProjects(): Promise<Project[]> {
  return prisma.project.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return prisma.project.findFirst({
    where: { slug, published: true },
  });
}