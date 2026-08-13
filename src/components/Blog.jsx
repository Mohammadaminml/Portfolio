import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import blogPosts from "../data/blogPosts";
import { cardReveal, fadeUp, stagger } from "../animations/motion";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("همه");
  const categories = ["همه", ...new Set(blogPosts.map((post) => post.category))];
  const posts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return blogPosts.filter((post) => (category === "همه" || post.category === category) && (!normalized || `${post.title} ${post.excerpt}`.toLocaleLowerCase("fa").includes(normalized)));
  }, [category, query]);

  return <section className="blog-page py-32">
    <div className="max-w-7xl mx-auto px-6">
      <motion.header variants={fadeUp} initial="hidden" animate="visible" className="blog-header"><p className="section-kicker">یادداشت‌های فنی</p><h1>چیزهایی که هنگام<br /><em>ساختن یاد گرفته‌ام.</em></h1><p>درباره معماری محصول، مهندسی فرانت‌اند و هوش مصنوعی؛ بدون نسخه‌های کلی و با تمرکز بر تصمیم‌هایی که در پروژه واقعی اهمیت دارند.</p></motion.header>
      <div className="blog-tools">
        <label><FaMagnifyingGlass /><span className="sr-only">جست‌وجوی مقاله</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجو در یادداشت‌ها..." /></label>
        <div className="blog-categories" aria-label="دسته‌بندی مقالات">{categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      {posts.length ? <motion.div key={`${query}-${category}`} variants={stagger} initial="hidden" animate="visible" className="blog-grid">{posts.map((post, index) => <motion.article variants={cardReveal} key={post.slug} className={`blog-card blog-${post.accent}`}><div className="blog-card-visual"><span>۰{index + 1}</span><b>{post.category}</b><i aria-hidden="true" /></div><div className="blog-card-body"><div><time>{post.date}</time><span>{post.readTime} مطالعه</span></div><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>خواندن مقاله <FaArrowLeft /></Link></div></motion.article>)}</motion.div> : <div className="blog-empty"><h2>مقاله‌ای پیدا نشد.</h2><p>عبارت دیگری جست‌وجو کن یا دسته‌بندی را تغییر بده.</p><button type="button" onClick={() => { setQuery(""); setCategory("همه"); }}>پاک‌کردن فیلترها</button></div>}
    </div>
  </section>;
}
