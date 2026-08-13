import { Link, Navigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaClock } from "react-icons/fa6";
import blogPosts, { getBlogPost } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return <article className="article-page">
    <header className={`article-hero blog-${post.accent}`}><div className="max-w-5xl mx-auto px-6"><Link to="/blog" className="article-back"><FaArrowRight /> بازگشت به وبلاگ</Link><div className="article-meta"><span>{post.category}</span><time>{post.date}</time><span><FaClock /> {post.readTime} مطالعه</span></div><h1>{post.title}</h1><p>{post.excerpt}</p></div></header>
    <div className="article-layout max-w-6xl mx-auto px-6">
      <aside className="article-toc"><p>در این مقاله</p><nav aria-label="فهرست مقاله">{post.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>۰{index + 1}</span>{section.title}</a>)}</nav></aside>
      <div className="article-content">{post.sections.map((section, index) => <section id={section.id} key={section.id}><span>۰{index + 1}</span><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</div>
    </div>
    <section className="related-posts"><div className="max-w-6xl mx-auto px-6"><div className="related-head"><p className="section-kicker">ادامه مطالعه</p><h2>یادداشت‌های مرتبط</h2></div><div>{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.category} · {item.readTime}</span><h3>{item.title}</h3><b>مطالعه مقاله <FaArrowLeft /></b></Link>)}</div></div></section>
  </article>;
}
