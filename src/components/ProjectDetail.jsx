import { Link, Navigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import projects, { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="case-detail">
      <header className={`case-hero case-hero-${project.accent}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/projects" className="case-back"><FaArrowRight /> همه پروژه‌ها</Link>
          <div className="case-hero-grid">
            <div>
              <p>{project.eyebrow} · {project.index}</p>
              <h1>{project.title}</h1>
              <p className="case-lead">{project.description}</p>
            </div>
            <dl>
              <div><dt>نقش من</dt><dd>{project.role}</dd></div>
              <div><dt>دامنه اجرا</dt><dd>{project.scope}</dd></div>
              <div><dt>فناوری‌ها</dt><dd>{project.tech.join(" · ")}</dd></div>
            </dl>
          </div>
          <figure className="case-cover">
            <img src={project.image} alt={project.imageAlt} width="1586" height="1000" fetchPriority="high" />
          </figure>
        </div>
      </header>

      <div className="case-body max-w-7xl mx-auto px-6">
        <section className="case-story">
          <span>01</span>
          <div><p className="section-kicker">مسئله</p><h2>چه چیزی باید حل می‌شد؟</h2><p>{project.challenge}</p></div>
        </section>
        <section className="case-story">
          <span>02</span>
          <div><p className="section-kicker">راهکار</p><h2>چطور به مسئله نزدیک شدم؟</h2><p>{project.solution}</p></div>
        </section>

        <section className="case-decisions">
          <div><p className="section-kicker">تصمیم‌های کلیدی</p><h2>انتخاب‌هایی که ساختار راهکار را شکل دادند.</h2></div>
          <ol>{project.decisions.map((item, index) => <li key={item}><b>۰{index + 1}</b><span>{item}</span></li>)}</ol>
        </section>

        <section className="case-outcomes">
          <p className="section-kicker">خروجی پروژه</p>
          <h2>نتیجه‌ای قابل نگهداری، نه فقط یک دموی موقت.</h2>
          <div>{project.outcomes.map((item) => <p key={item}><FaCheck />{item}</p>)}</div>
          <small>برای حفظ دقت و محرمانگی، فقط نتایجی نمایش داده شده‌اند که بدون انتشار اطلاعات مشتری قابل بیان هستند.</small>
        </section>

        <section className="case-next">
          <div><span>پروژه بعدی</span><h2>{nextProject.title}</h2></div>
          <Link to={`/projects/${nextProject.slug}`} aria-label={`پروژه بعدی: ${nextProject.title}`}><FaArrowLeft /></Link>
        </section>
      </div>
    </article>
  );
}
