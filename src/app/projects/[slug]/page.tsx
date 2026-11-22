import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      {/* نمایش جزئیات project */}
    </article>
  );
}