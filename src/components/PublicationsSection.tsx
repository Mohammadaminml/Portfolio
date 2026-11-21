import { FiExternalLink } from "react-icons/fi";
import { publications } from "@/data/publications";
import { Locale } from "@/types/site";

export function PublicationsSection({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";

  return (
    <section id="publications" className="scroll-mt-24 space-y-8">
      <div className="space-y-1.5">
        <span className="text-xs font-extrabold text-[var(--accent)]">
          {isFa ? "پژوهش و انتشارات" : "RESEARCH & PAPERS"}
        </span>
        <h2 className="text-3xl font-black">
          {isFa ? "مقالات علمی و کنفرانسی" : "Publications"}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {publications.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sig-card group flex min-h-72 flex-col p-7"
          >
            <span className="text-xs font-bold text-[var(--accent)]">
              {item.date[locale]}
            </span>

            <h3 className="mt-4 text-lg font-extrabold leading-relaxed text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
              {item.title[locale]}
            </h3>

            <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
              {item.publisher[locale]}
            </p>

            <div className="mt-auto flex items-center gap-2 pt-8 text-xs font-bold text-[var(--accent)]">
              <span>{isFa ? "مشاهده مقاله" : "View Publication"}</span>
              <FiExternalLink
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}