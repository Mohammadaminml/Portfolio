import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { updateProjectAction } from "../../actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ویرایش پروژه: {project.title}</h1>
      <ProjectForm
        action={updateProjectAction.bind(null, project.id)}
        project={project}
        submitLabel="ذخیره تغییرات"
      />
    </div>
  );
}