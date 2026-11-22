import Link from "next/link";
import type { Project } from "@prisma/client";

interface ProjectFormProps {
  action: (formData: FormData) => Promise<void>;
  project?: Project;
  submitLabel: string;
}

export function ProjectForm({
  action,
  project,
  submitLabel,
}: ProjectFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="عنوان" name="title" defaultValue={project?.title} required />
        <Field label="اسلاگ (URL)" name="slug" defaultValue={project?.slug} required />
        <Field label="شماره (مثلاً 01)" name="index" defaultValue={project?.index ?? "12"} required />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="برچسب (Eyebrow)" name="eyebrow" defaultValue={project?.eyebrow} required />
        <Field label="نقش" name="role" defaultValue={project?.role} required />
        <Field label="حوزه (Scope)" name="scope" defaultValue={project?.scope} required />
      </div>

      <TextArea label="خلاصه" name="summary" defaultValue={project?.summary} rows={2} required />
      <TextArea label="توضیحات کامل" name="description" defaultValue={project?.description} rows={4} required />

      <div className="grid gap-4 md:grid-cols-2">
        <TextArea label="چالش" name="challenge" defaultValue={project?.challenge} rows={3} required />
        <TextArea label="راه‌حل" name="solution" defaultValue={project?.solution} rows={3} required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TextArea
          label="تصمیمات معماری (هر مورد در یک خط)"
          name="decisions"
          defaultValue={project?.decisions.join("\n")}
          rows={3}
        />
        <TextArea
          label="دستاوردها (هر مورد در یک خط)"
          name="outcomes"
          defaultValue={project?.outcomes.join("\n")}
          rows={3}
        />
      </div>

      <Field
        label="تکنولوژی‌ها (با ویرگول جدا کنید: Next.js, TypeScript, Prisma)"
        name="tech"
        defaultValue={project?.tech.join(", ")}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="مسیر تصویر" name="image" defaultValue={project?.image} required />
        <Field label="متن جایگزین تصویر" name="imageAlt" defaultValue={project?.imageAlt} required />
        <Field label="رنگ تم (accent)" name="accent" defaultValue={project?.accent ?? "blue"} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="لینک دمو" name="liveUrl" defaultValue={project?.liveUrl ?? ""} />
        <Field label="لینک گیت‌هاب" name="githubUrl" defaultValue={project?.githubUrl ?? ""} />
        <Field
          label="ترتیب نمایش"
          name="sortOrder"
          type="number"
          defaultValue={String(project?.sortOrder ?? 0)}
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          name="published"
          defaultChecked={project?.published ?? true}
          className="h-4 w-4 rounded border-slate-700 bg-slate-900"
        />
        منتشر شده در سایت
      </label>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          {submitLabel}
        </button>
        <Link
          href="/admin"
          className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800"
        >
          انصراف
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-xs text-slate-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-500"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  defaultValue,
  rows,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows: number;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-xs text-slate-400">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-500"
      />
    </div>
  );
}