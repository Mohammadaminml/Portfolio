import { ProjectForm } from "@/components/admin/ProjectForm";
import { createProjectAction } from "../actions";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">افزودن پروژه‌ی جدید</h1>
      <ProjectForm action={createProjectAction} submitLabel="ذخیره پروژه" />
    </div>
  );
}