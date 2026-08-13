import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useLanguage } from "./i18n/LanguageContext";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const CounterStats = lazy(() => import("./components/CounterStats"));
const Education = lazy(() => import("./components/Education"));
const Publications = lazy(() => import("./components/Publications"));
const TechStack = lazy(() => import("./components/TechStack"));
const Contact = lazy(() => import("./components/Contact"));
const Shop = lazy(() => import("./components/Shop"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));

const routes = [
  { path: "about", Component: About },
  { path: "skills", Component: Skills },
  { path: "experience", Component: Experience },
  { path: "projects", Component: Projects },
  { path: "statistics", Component: CounterStats },
  { path: "education", Component: Education },
  { path: "publications", Component: Publications },
  { path: "tech-stack", Component: TechStack },
  { path: "contact", Component: Contact },
];

function PageLoader() {
  const { content } = useLanguage();
  return (
    <div className="min-h-[70vh] grid place-items-center" role="status">
      <span className="loader" aria-label={content.accessibility.loading} />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:slug" element={<ProductDetail />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
