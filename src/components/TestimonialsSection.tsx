import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { Locale } from "@/types/site";

export function TestimonialsSection({ locale }: { locale: Locale }) {
  if (testimonials.length === 0) return null;

  const isFa = locale === "fa";

  return (
    <section id="testimonials" className="scroll-mt-24 space-y-6">
      <h2 className="text-2xl font-bold">
        {isFa ? "توصیه‌نامه‌ها" : "Testimonials"}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item, idx) => (
          <blockquote
            key={`${item.name}-${idx}`}
            className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <p className="text-sm leading-relaxed text-[var(--text)]">
              «{item.quote}»
            </p>

            <footer className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
              <div className="flex items-center gap-3">
                {item.avatar && (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                )}
                <div>
                  {item.profileUrl ? (
                    <a
                      href={item.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:text-[var(--accent)]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <div className="text-sm font-bold">{item.name}</div>
                  )}
                  <div className="text-xs text-[var(--text-muted)]">
                    {item.role} — {item.company}
                  </div>
                </div>
              </div>

              {item.projectSlug && (
                <Link
                  href={`/${locale}/projects/${item.projectSlug}`}
                  className="text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  {isFa ? "مشاهده پروژه" : "View Project"}
                </Link>
              )}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}