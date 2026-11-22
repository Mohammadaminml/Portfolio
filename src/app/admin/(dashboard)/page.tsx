import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaFilePen,
  FaFolderOpen,
  FaPenToSquare,
  FaPlus,
  FaTrashCan,
} from "react-icons/fa6";
import { prisma } from "@/lib/prisma";
import {
  deleteProjectAction,
  togglePublishAction,
} from "./projects/actions";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  const publishedCount = projects.filter((p) => p.published).length;
  const draftCount = projects.length - publishedCount;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-[var(--accent)]">مدیریت محتوا</p>
          <h1 className="mt-1 text-2xl font-black sm:text-3xl">پروژه‌های منتخب</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            افزودن، ویرایش و کنترل وضعیت انتشار پروژه‌ها در دیتابیس
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
        >
          <FaPlus className="h-3.5 w-3.5" />
          <span>پروژه‌ی جدید</span>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="کل پروژه‌ها"
          value={projects.length}
          icon={<FaFolderOpen className="h-4 w-4 text-blue-400" />}
          badgeClass="bg-blue-500/15 ring-blue-500/30"
        />
        <StatCard
          label="منتشر شده"
          value={publishedCount}
          icon={<FaCheck className="h-4 w-4 text-emerald-400" />}
          badgeClass="bg-emerald-500/15 ring-emerald-500/30"
        />
        <StatCard
          label="پیش‌نویس"
          value={draftCount}
          icon={<FaFilePen className="h-4 w-4 text-amber-400" />}
          badgeClass="bg-amber-500/15 ring-amber-500/30"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--surface-muted)]/60 text-xs font-bold text-[var(--text-muted)]">
              <tr>
                <th className="px-5 py-4">#</th>
                <th className="px-5 py-4">پروژه</th>
                <th className="px-5 py-4">تکنولوژی‌ها</th>
                <th className="px-5 py-4">وضعیت</th>
                <th className="px-5 py-4 text-left">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]/70">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="group transition-colors hover:bg-[var(--surface-muted)]/35"
                >
                  <td className="px-5 py-4 font-mono text-xs font-bold text-[var(--text-muted)]">
                    {project.index}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-bold text-[var(--text)]">
                          {project.title}
                        </p>
                        <p
                          dir="ltr"
                          className="truncate text-right font-mono text-xs text-[var(--text-muted)]"
                        >
                          /{project.slug}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div dir="ltr" className="flex flex-wrap justify-end gap-1.5">
                      {project.tech.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="rounded-md bg-[var(--surface-muted)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <form
                      action={togglePublishAction.bind(
                        null,
                        project.id,
                        project.published
                      )}
                    >
                      <button
                        type="submit"
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${
                          project.published
                            ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30 hover:bg-emerald-500/25"
                            : "bg-slate-500/15 text-slate-400 ring-1 ring-slate-500/30 hover:bg-slate-500/25"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            project.published ? "bg-emerald-400" : "bg-slate-400"
                          }`}
                        />
                        <span>{project.published ? "منتشر شده" : "پیش‌نویس"}</span>
                      </button>
                    </form>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/fa/projects/${project.slug}`}
                        target="_blank"
                        title="مشاهده در سایت"
                        className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--text-muted)] hover:text-[var(--text)]"
                      >
                        <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                      </Link>

                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        title="ویرایش"
                        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-blue-500/25 bg-blue-500/10 px-2.5 text-xs font-semibold text-blue-400 transition hover:bg-blue-500/20"
                      >
                        <FaPenToSquare className="h-3.5 w-3.5" />
                        <span>ویرایش</span>
                      </Link>

                      <form action={deleteProjectAction.bind(null, project.id)}>
                        <button
                          type="submit"
                          title="حذف"
                          className="grid h-8 w-8 place-items-center rounded-lg border border-rose-500/25 bg-rose-500/10 text-rose-400 transition hover:bg-rose-500/20"
                        >
                          <FaTrashCan className="h-3.5 w-3.5" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  badgeClass,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  badgeClass: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div>
        <p className="text-xs font-semibold text-[var(--text-muted)]">{label}</p>
        <p className="mt-1.5 text-2xl font-black">{value}</p>
      </div>
      <span
        className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${badgeClass}`}
      >
        {icon}
      </span>
    </div>
  );
}