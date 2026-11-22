import { FaLock } from "react-icons/fa6";
import { loginAction } from "../actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4 text-[var(--text)]"
    >
      <form
        action={loginAction}
        className="w-full max-w-sm space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl shadow-black/30"
      >
        <div className="space-y-2 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/30">
            <FaLock className="h-5 w-5" />
          </span>
          <h1 className="text-xl font-black">ورود به پنل ادمین</h1>
          <p className="text-xs text-[var(--text-muted)]">
            رمز عبور تعریف‌شده در فایل .env را وارد کنید
          </p>
        </div>

        {error && (
          <p className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-3.5 py-2.5 text-center text-xs font-semibold text-rose-400">
            رمز عبور اشتباه است.
          </p>
        )}

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-xs font-semibold text-[var(--text-muted)]"
          >
            رمز عبور
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••••••"
            required
            autoFocus
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--accent)] py-3 text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/20 transition hover:bg-[var(--accent-hover)]"
        >
          ورود به داشبورد
        </button>
      </form>
    </div>
  );
}