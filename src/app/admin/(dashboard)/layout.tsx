import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowUpRightFromSquare, FaLayerGroup, FaRightFromBracket } from "react-icons/fa6";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { logoutAction } from "../actions";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/30">
              <FaLayerGroup className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <span className="block text-sm font-black">پنل مدیریت پورتفولیو</span>
              <span className="block text-[11px] text-[var(--text-muted)]">
                PostgreSQL · Prisma CMS
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2.5 text-xs font-semibold">
            <Link
              href="/fa/projects"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-[var(--text-muted)] transition hover:border-[var(--accent)]/50 hover:text-[var(--text)]"
            >
              <span>مشاهده سایت</span>
              <FaArrowUpRightFromSquare className="h-3 w-3" />
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3.5 py-2 text-rose-400 transition hover:bg-rose-500/20"
              >
                <FaRightFromBracket className="h-3.5 w-3.5" />
                <span>خروج</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}