module.exports = [
"[project]/.next-internal/server/app/[lang]/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCENT_STYLES",
    ()=>ACCENT_STYLES,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const ACCENT_STYLES = {
    mint: {
        badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        border: "hover:border-emerald-500/40",
        dot: "bg-emerald-500"
    },
    blue: {
        badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        border: "hover:border-blue-500/40",
        dot: "bg-blue-500"
    },
    violet: {
        badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
        border: "hover:border-violet-500/40",
        dot: "bg-violet-500"
    },
    coral: {
        badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
        border: "hover:border-orange-500/40",
        dot: "bg-orange-500"
    },
    rose: {
        badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
        border: "hover:border-rose-500/40",
        dot: "bg-rose-500"
    },
    amber: {
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        border: "hover:border-amber-500/40",
        dot: "bg-amber-500"
    },
    indigo: {
        badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
        border: "hover:border-indigo-500/40",
        dot: "bg-indigo-500"
    },
    purple: {
        badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
        border: "hover:border-purple-500/40",
        dot: "bg-purple-500"
    }
};
const projects = [
    {
        slug: "freelancer-flow",
        index: "۰۱",
        title: "FreelancerFlow",
        eyebrow: "مدیریت یکپارچه فریلنسری",
        summary: "فضای کاری فارسی و واکنش‌گرا برای مدیریت مشتری‌ها، پروژه‌ها، وظایف، قراردادها و امور مالی فریلنسرها.",
        description: "FreelancerFlow یک داشبورد مدیریتی متمرکز است که ابزارهای روزمره یک فریلنسر را در یک تجربه ساده و منسجم کنار هم قرار می‌دهد؛ از پیگیری پروژه و کارها تا مدیریت مشتری، قرارداد و جریان مالی.",
        role: "طراحی محصول و توسعه فرانت‌اند",
        scope: "رابط کاربری، مدیریت داده و تجربه واکنش‌گرا",
        tech: [
            "React",
            "Vite",
            "LocalStorage"
        ],
        challenge: "اطلاعات کاری فریلنسرها معمولاً میان پیام‌رسان، فایل‌های پراکنده و ابزارهای مختلف تقسیم می‌شود و دیدن وضعیت واقعی پروژه‌ها، تعهدات و امور مالی را دشوار می‌کند.",
        solution: "یک فضای کاری یکپارچه با ناوبری روشن و داشبوردهای متمرکز طراحی شد تا اطلاعات مشتری‌ها، پروژه‌ها و وظایف در دسترس باشند و داده‌ها بدون نیاز به راه‌اندازی سرور، داخل مرورگر کاربر نگهداری شوند.",
        decisions: [
            "طراحی رابط فارسی و راست‌چین با تمرکز بر استفاده روزمره",
            "یکپارچه‌سازی مشتری‌ها، پروژه‌ها، وظایف و امور مالی در یک فضای کاری",
            "ذخیره محلی داده‌ها برای شروع سریع و اجرای مستقل نسخه نمایشی"
        ],
        outcomes: [
            "نمای یکپارچه از وضعیت کارها و پروژه‌های فعال",
            "تجربه واکنش‌گرا و قابل استفاده در دسکتاپ و موبایل",
            "نسخه نمایشی آنلاین و قابل بررسی بدون فرایند نصب"
        ],
        accent: "mint",
        image: "/projects/freelancer-flow.svg",
        imageAlt: "نمایی از داشبورد فارسی FreelancerFlow برای مدیریت پروژه‌ها و فعالیت‌های فریلنسری",
        liveUrl: "https://mohammadaminml.github.io/FreelancerFlow/",
        githubUrl: "https://github.com/mohammadaminml/FreelancerFlow"
    },
    {
        slug: "patient-management-system",
        index: "۰۲",
        title: "سامانه مدیریت بیماران",
        eyebrow: "نرم‌افزار سلامت",
        summary: "سامانه‌ای برای ثبت، بازیابی و مدیریت منظم اطلاعات بیماران و پرونده‌های پزشکی.",
        description: "این پروژه با تمرکز بر مدل‌سازی صحیح داده‌ها، جست‌وجوی سریع و نگهداری مطمئن اطلاعات در محیطی با منابع محدود طراحی شد.",
        role: "طراحی ساختار داده و توسعه نرم‌افزار",
        scope: "تحلیل، معماری و پیاده‌سازی",
        tech: [
            "C",
            "Data Structures",
            "File Handling"
        ],
        challenge: "اطلاعات بیماران باید بدون وابستگی به پایگاه داده خارجی، ساختاریافته ذخیره می‌شد و عملیات ثبت، ویرایش، حذف و جست‌وجو قابل اتکا باقی می‌ماند.",
        solution: "ساختار داده‌ای مشخص برای رکوردهای پزشکی طراحی شد و لایه‌های ورودی، اعتبارسنجی، عملیات پرونده و ذخیره‌سازی فایل از یکدیگر جدا شدند تا نگهداری سیستم ساده‌تر باشد.",
        decisions: [
            "تفکیک منطق مدیریت رکوردها از رابط خط فرمان",
            "اعتبارسنجی ورودی پیش از ذخیره اطلاعات",
            "طراحی عملیات جست‌وجو و ویرایش بدون تغییر ناخواسته سایر رکوردها"
        ],
        outcomes: [
            "مدیریت یکپارچه چرخه اطلاعات بیمار",
            "کاهش خطاهای ورودی با اعتبارسنجی داده‌ها",
            "ساختاری قابل توسعه برای افزودن قابلیت‌های جدید"
        ],
        accent: "blue",
        image: "/projects/patient-management.webp",
        imageAlt: "تصویر مفهومی پرونده‌های دیجیتال و سامانه مدیریت بیماران"
    },
    {
        slug: "full-stack-web-platforms",
        index: "۰۳",
        title: "محصولات فول‌استک تحت وب",
        eyebrow: "توسعه محصول",
        summary: "اپلیکیشن‌های مدرن با رابط React، بک‌اند Django و پایگاه داده PostgreSQL.",
        description: "مجموعه‌ای از تجربه‌های توسعه محصول که در آن رابط کاربری، API، منطق کسب‌وکار و پایگاه داده به‌عنوان یک سیستم واحد طراحی شده‌اند.",
        role: "توسعه‌دهنده فول‌استک",
        scope: "رابط کاربری، API و پایگاه داده",
        tech: [
            "React",
            "Django",
            "PostgreSQL"
        ],
        challenge: "هماهنگ نگه‌داشتن تجربه کاربری سریع با منطق پیچیده سمت سرور و ساختاری که در ادامه مسیر محصول قابل توسعه باشد.",
        solution: "قراردادهای API شفاف، کامپوننت‌های قابل استفاده مجدد و مدل داده متناسب با منطق محصول طراحی شد؛ سپس خطاها و حالت‌های بارگذاری در تمام مسیرهای اصلی پوشش داده شدند.",
        decisions: [
            "تفکیک مسئولیت رابط، API و منطق دامنه",
            "طراحی کامپوننت‌های تکرارپذیر برای حفظ انسجام رابط",
            "مدل‌سازی پایگاه داده با تمرکز بر رشد آینده محصول"
        ],
        outcomes: [
            "تجربه یکپارچه از رابط کاربری تا پایگاه داده",
            "کد قابل نگهداری و آماده توسعه قابلیت‌های بعدی",
            "ساختار مناسب برای تست و استقرار مرحله‌ای"
        ],
        accent: "violet",
        image: "/projects/full-stack-platform.webp",
        imageAlt: "تصویر مفهومی معماری یک محصول فول‌استک تحت وب"
    },
    {
        slug: "mobile-backend-solutions",
        index: "۰۴",
        title: "راهکارهای موبایل و بک‌اند",
        eyebrow: "اپلیکیشن موبایل",
        summary: "اپلیکیشن‌های موبایل متصل به سرویس‌های بک‌اند امن و توسعه‌پذیر.",
        description: "طراحی تجربه موبایل و سرویس‌های پشتیبان با تمرکز بر ارتباط پایدار، مدیریت وضعیت و رفتار قابل پیش‌بینی در شرایط مختلف شبکه.",
        role: "توسعه موبایل و طراحی سرویس",
        scope: "اپلیکیشن، API و ذخیره‌سازی داده",
        tech: [
            "Kotlin",
            "Node.js",
            "MongoDB"
        ],
        challenge: "اپلیکیشن باید در کنار تجربه روان، خطاهای شبکه، وضعیت نشست کاربر و همگام‌سازی داده با سرور را به‌درستی مدیریت می‌کرد.",
        solution: "جریان‌های ارتباطی مشخص میان موبایل و API تعریف شد و برای حالت‌های loading، خطا و تلاش مجدد رفتارهای قابل فهمی در رابط در نظر گرفته شد.",
        decisions: [
            "قرارداد پاسخ استاندارد برای endpointها",
            "مدیریت مرکزی احراز هویت و خطاهای شبکه",
            "مدل داده منعطف برای تغییرات تدریجی محصول"
        ],
        outcomes: [
            "ارتباط قابل اتکا میان اپلیکیشن و سرور",
            "مدیریت روشن خطا و وضعیت‌های موقت",
            "زیرساخت آماده برای گسترش قابلیت‌های موبایل"
        ],
        accent: "coral",
        image: "/projects/mobile-backend.webp",
        imageAlt: "تصویر مفهومی اپلیکیشن موبایل متصل به زیرساخت ابری"
    },
    {
        slug: "ai-computer-vision",
        index: "۰۵",
        title: "هوش مصنوعی و بینایی ماشین",
        eyebrow: "هوش مصنوعی کاربردی",
        summary: "راهکارهایی برای تحلیل تصویر، یادگیری ماشین و خودکارسازی فرایندها.",
        description: "پروژه‌هایی با تمرکز بر تبدیل مدل‌های آزمایشگاهی به جریان‌های قابل استفاده؛ از آماده‌سازی داده تا ارزیابی و ارائه خروجی قابل فهم.",
        role: "توسعه و ارزیابی راهکار هوشمند",
        scope: "داده، مدل و جریان پردازش",
        tech: [
            "Python",
            "OpenCV",
            "Keras"
        ],
        challenge: "کیفیت داده و تفاوت شرایط واقعی می‌تواند نتیجه مدل را تغییر دهد؛ بنابراین تنها دقت روی داده آموزشی معیار کافی نبود.",
        solution: "یک pipeline روشن برای پیش‌پردازش، آموزش و ارزیابی طراحی شد و خروجی مدل در سناریوهای متفاوت بررسی شد تا محدودیت‌های آن قابل مشاهده باشد.",
        decisions: [
            "جداسازی مراحل آماده‌سازی داده، آموزش و inference",
            "استفاده از معیارهای ارزیابی متناسب با مسئله",
            "ثبت تنظیمات آزمایش برای تکرارپذیری نتایج"
        ],
        outcomes: [
            "فرایند تکرارپذیر برای آزمایش و مقایسه مدل‌ها",
            "شناخت روشن‌تر خطاها و محدودیت‌های مدل",
            "ساختار آماده برای اتصال مدل به محصول واقعی"
        ],
        accent: "mint",
        image: "/projects/ai-computer-vision.webp",
        imageAlt: "تصویر مفهومی بینایی ماشین و تحلیل هوشمند تصویر"
    },
    {
        slug: "mahsa-beauty-onlineshop",
        index: "۰۶",
        title: "فروشگاه آنلاین زیبایی",
        eyebrow: "پلتفرم تجارت الکترونیک",
        summary: "یک فروشگاه اینترنتی مدرن برای محصولات زیبایی با تجربه کاربری روان و مدیریت بهینه سبد خرید.",
        description: "طراحی و توسعه یک پلتفرم فروشگاهی کامل شامل کاتالوگ محصولات، فیلترهای پیشرفته، سبد خرید پویا و فرایند ثبت سفارش با هدف ایجاد یک تجربه خرید سریع و یکپارچه.",
        role: "توسعه‌دهنده فرانت‌اند و بک‌اند",
        scope: "رابط کاربری، مدیریت وضعیت و اتصال به API",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand"
        ],
        challenge: "مدیریت یکپارچه وضعیت سبد خرید در سراسر برنامه و اعمال فیلترهای پیچیده محصولات بدون افت عملکرد در سمت کلاینت.",
        solution: "استفاده از Zustand برای مدیریت متمرکز و سبک سبد خرید و بهره‌گیری از قابلیت‌های رندرینگ Next.js برای بارگذاری سریع صفحات کاتالوگ و بهبود سئو.",
        decisions: [
            "انتخاب Zustand به جای Redux برای مدیریت وضعیت سریع‌تر و سبک‌تر",
            "طراحی کاملاً Mobile-First با استفاده از Tailwind CSS",
            "ساختاردهی ماژولار کامپوننت‌های محصول برای استفاده مجدد در صفحات مختلف"
        ],
        outcomes: [
            "تجربه کاربری (UX) سریع و بدون وقفه در فرایند جستجو و خرید",
            "کدبیس توسعه‌پذیر و منعطف برای افزودن دسته‌بندی‌ها و ویژگی‌های جدید فروشگاهی",
            "بهبود سرعت بارگذاری اولیه با استفاده از معماری Next.js"
        ],
        accent: "rose",
        image: "/projects/mahsa-beauty.webp",
        imageAlt: "تصویر رابط کاربری فروشگاه آنلاین لوازم آرایشی زیبایی",
        githubUrl: "https://github.com/mohammadaminml/Mahsa-Beauty-onlineshop"
    },
    {
        slug: "single-page-cv",
        index: "۰۷",
        title: "رزومه آنلاین تک‌صفحه‌ای",
        eyebrow: "ابزار شخصی و معرفی حرفه‌ای",
        summary: "یک پلتفرم وب واکنش‌گرا و مدرن برای ساخت و نمایش رزومه تک‌صفحه‌ای با قابلیت خروجی استاندارد.",
        description: "طراحی و توسعه یک قالب رزومه آنلاین و پویا با تمرکز بر بارگذاری سریع، دسترسی‌پذیری بالا و ارائه اطلاعات کلیدی کارجو در یک نگاه، همراه با بهینه‌سازی برای نسخه چاپی (Print-friendly).",
        role: "توسعه‌دهنده فرانت‌اند",
        scope: "رابط کاربری، ساختار معنایی و استایل‌دهی چاپی",
        tech: [
            "HTML",
            "CSS",
            "Next.js",
            "Tailwind CSS"
        ],
        challenge: "حفظ خوانایی و بهینه‌سازی نمایش اطلاعات زیاد در یک صفحه واحد و همچنین هماهنگی دقیق ظاهر دیجیتال با نسخه چاپی (PDF) بدون تداخل در چیدمان.",
        solution: "استفاده از ساختار معنایی (Semantic HTML)، طراحی بخش‌بندی شده و فشرده و به‌کارگیری دستورات @media print در CSS برای پنهان‌سازی عناصر غیرضروری و تراز دقیق صفحات هنگام خروجی گرفتن.",
        decisions: [
            "به‌کارگیری چیدمان گرید و فلکس‌باکس برای انعطاف‌پذیری و واکنش‌گرایی کامل در موبایل و دسکتاپ",
            "پیاده‌سازی سبک بصری مینیمال و حرفه‌ای با تایپوگرافی خوانا",
            "افزودن قابلیت دانلود یا چاپ مستقیم به عنوان رزومه فیزیکی استاندارد"
        ],
        outcomes: [
            "یک صفحه معرفی همه‌جانبه، سبک و با سرعت بارگذاری فوق‌العاده",
            "خروجی چاپی کاملاً منظم و بدون به‌هم‌ریختگی در قالب یک صفحه استاندارد PDF",
            "امکان به‌روزرسانی سریع اطلاعات و شخصی‌سازی آسان بر اساس نیازهای مختلف کاری"
        ],
        accent: "amber",
        image: "/projects/single-page-cv.webp",
        imageAlt: "تصویر رابط کاربری و نسخه چاپی رزومه تک‌صفحه‌ای آنلاین",
        githubUrl: "https://github.com/mohammadaminml/Single-Page-CV"
    },
    {
        slug: "next-forge",
        index: "۰۸",
        title: "پروژه Next Forge",
        eyebrow: "معماری نرم‌افزار و ابزار توسعه",
        summary: "پلتفرمی مدرن و مقیاس‌پذیر بر پایه Next.js با تمرکز بر ساختاردهی پیشرفته مونوپروژه (Monorepo).",
        description: "پیاده‌سازی و پیکربندی ساختار یکپارچه برای توسعه برنامه‌های وب مقیاس‌پذیر با استفاده از آخرین الگوهای مهندسی نرم‌افزار، مدیریت پکیج‌ها و تنظیمات بهینه.",
        role: "معمار و توسعه‌دهنده سیستم",
        scope: "معماری مونوپروژه، پیکربندی ابزارها و اتوماسیون",
        tech: [
            "Next.js",
            "TypeScript",
            "Turborepo",
            "Tailwind CSS"
        ],
        challenge: "مدیریت وابستگی‌ها، اشتراک‌گذاری کدها بین پکیج‌های مختلف و حفظ سرعت بالا در فرایند بیلد و توسعه در یک ساختار مونوپروژه پیچیده.",
        solution: "بهره‌گیری از ابزارهای مدیریت مونوپروژه مدرن مانند Turborepo برای بهینه‌سازی کَش‌گذاری (Caching) بیلدها و تفکیک دقیق منطق و کامپوننت‌های مشترک.",
        decisions: [
            "ساختاردهی پکیج‌های مشترک (UI, Configs, Utils) به صورت ماژولار",
            "تنظیم دقیق خط مشی‌های TypeScript و ابزارهای لینتینگ در کل مونوپروژه",
            "خودکارسازی فرایندهای CI/CD برای تست و استقرار یکپارچه"
        ],
        outcomes: [
            "افزایش چشمگیر سرعت توسعه و کاهش کدهای تکراری (DRY)",
            "یکپارچگی کامل در استایل‌دهی و انواع داده‌ها در تمامی بخش‌های اپلیکیشن",
            "ساختار آماده برای مقیاس‌پذیری تیم‌های بزرگ مهندسی نرم‌افزار"
        ],
        accent: "indigo",
        image: "/projects/next-forge.webp",
        imageAlt: "تصویر مفهومی معماری مونوپروژه و توسعه نرم‌افزار با Next Forge",
        githubUrl: "https://github.com/mohammadaminml/next-forge"
    },
    {
        slug: "mona-mojard-portfolio",
        index: "۰۹",
        title: "پورتفولیو و وب‌سایت شخصی",
        eyebrow: "معرفی حرفه‌ای و گالری آثار",
        summary: "یک پلتفرم شخصی‌سازی‌شده برای نمایش نمونه کارها، مهارت‌ها و سوابق حرفه‌ای با رابط کاربری مینیمال و جذاب.",
        description: "طراحی و توسعه یک وب‌سایت تعاملی و واکنش‌گرا با تمرکز بر ارائه محتوای بصری (گالری کارها) و ایجاد یک تجربه کاربری (UX) متمایز، همراه با انیمیشن‌های روان و سرعت بارگذاری بالا.",
        role: "توسعه‌دهنده فرانت‌اند",
        scope: "طراحی رابط کاربری، پیاده‌سازی گالری و توسعه وب",
        tech: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        challenge: "ایجاد تعادل بین زیبایی بصری (استفاده از تصاویر باکیفیت و انیمیشن‌های پیچیده) و عملکرد بالا (Performance) در دستگاه‌های مختلف، به ویژه روی شبکه‌های موبایل.",
        solution: "به‌کارگیری انیمیشن‌های بهینه‌شده و پیاده‌سازی تکنیک‌های Lazy Loading برای بارگذاری تصاویر گالری و استفاده از قابلیت‌های رندرینگ Next.js برای بهبود سئو.",
        decisions: [
            "طراحی کاملاً واکنش‌گرا (Mobile-First) با استفاده از Tailwind CSS",
            "استفاده از Framer Motion برای ترانزیشن‌های نرم و هدایت چشم کاربر بدون ایجاد حواس‌پرتی",
            "پیاده‌سازی حالت تاریک (Dark Mode) برای برجسته‌تر کردن آثار هنری و نمونه کارها"
        ],
        outcomes: [
            "یک وب‌سایت شخصی حرفه‌ای با سرعت لود بهینه‌شده",
            "بهبود چشمگیر نمایش نمونه کارها از طریق یک گالری تعاملی و یکپارچه",
            "افزایش دسترسی‌پذیری و خوانایی اطلاعات ارتباطی در تمامی نمایشگرها"
        ],
        accent: "purple",
        image: "/projects/mona-mojard-portfolio.webp",
        imageAlt: "تصویر رابط کاربری وب‌سایت پورتفولیو شخصی در حالت تاریک",
        githubUrl: "https://github.com/mohammadaminml/mona-mojard-portfolio2"
    }
];
const getProjectBySlug = (slug)=>projects.find((project)=>project.slug === slug);
}),
"[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const HERO_GRADIENTS = {
    blue: "from-[#0c1d38] to-[#1e468c]",
    violet: "from-[#0c1d38] to-[#4c3080]",
    coral: "from-[#0c1d38] to-[#8a3626]",
    mint: "from-[#0c1d38] to-[#105c4e]"
};
function generateStaticParams() {
    return [
        "fa",
        "en"
    ].flatMap((lang)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
                lang,
                slug: project.slug
            })));
}
async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) return {};
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
        locale: lang,
        path: `/projects/${project.slug}`,
        title: `${project.title} | ${lang === "fa" ? "محمدامین ملاکاظمی‌ها" : "Mohammadamin Mollakazemiha"}`,
        description: project.summary
    });
}
async function ProjectDetailPage({ params }) {
    const { lang, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isFa = lang === "fa";
    const BackArrow = isFa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowRight"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowLeft"];
    const NextArrow = isFa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowRight"];
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].findIndex((item)=>item.slug === project.slug);
    const nextProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"][(currentIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].length];
    const heroGradient = HERO_GRADIENTS[project.accent] ?? HERO_GRADIENTS.blue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "overflow-hidden bg-[var(--bg)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `bg-gradient-to-br ${heroGradient} pt-16 pb-24 text-white sm:pt-24 sm:pb-32`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}/projects`,
                            className: "inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BackArrow, {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isFa ? "همه پروژه‌ها" : "All Projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-white/70",
                                            children: [
                                                project.eyebrow,
                                                " · ",
                                                project.index
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-3 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        (project.liveUrl || project.githubUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-7 flex flex-wrap gap-3",
                                            children: [
                                                project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.liveUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: isFa ? "مشاهده نسخه زنده" : "Live Demo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowUpRightFromSquare"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaGithub"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: isFa ? "مشاهده در GitHub" : "View on GitHub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "divide-y divide-white/20 border-y border-white/20 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs text-white/60",
                                                    children: isFa ? "نقش من" : "My Role"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 font-bold",
                                                    children: project.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs text-white/60",
                                                    children: isFa ? "دامنه اجرا" : "Scope"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 font-bold",
                                                    children: project.scope
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs text-white/60",
                                                    children: isFa ? "فناوری‌ها" : "Technologies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "mt-1 font-bold",
                                                    dir: "ltr",
                                                    children: project.tech.join(" · ")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "relative z-10 mt-12 -mb-36 aspect-[1.586/1] w-full overflow-hidden rounded-[28px_14px_28px_14px] border border-white/25 bg-[#10223e] shadow-2xl sm:mt-16 sm:-mb-52 sm:rounded-[40px_20px_40px_20px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: project.image,
                                alt: project.imageAlt || project.title,
                                fill: true,
                                priority: true,
                                sizes: "(max-width: 1152px) 100vw, 1152px",
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-6 pt-44 pb-20 sm:pt-64 sm:pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid max-w-4xl gap-4 border-t border-[var(--border)] py-12 md:grid-cols-[5rem_1fr] md:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-sm font-bold text-[var(--text-muted)]",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-extrabold text-[var(--accent)]",
                                        children: isFa ? "مسئله" : "THE CHALLENGE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black sm:text-4xl",
                                        children: isFa ? "چه چیزی باید حل می‌شد؟" : "What needed to be solved?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pt-2 text-sm leading-loose text-[var(--text-muted)] sm:text-base",
                                        children: project.challenge
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid max-w-4xl gap-4 border-t border-[var(--border)] py-12 md:grid-cols-[5rem_1fr] md:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-sm font-bold text-[var(--text-muted)]",
                                children: "02"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-extrabold text-[var(--accent)]",
                                        children: isFa ? "راهکار" : "THE SOLUTION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black sm:text-4xl",
                                        children: isFa ? "چطور به مسئله نزدیک شدم؟" : "How I approached it"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pt-2 text-sm leading-loose text-[var(--text-muted)] sm:text-base",
                                        children: project.solution
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "fa-navy-block mt-10 grid gap-10 rounded-[32px_16px_32px_16px] p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-extrabold text-[#8eb7ff]",
                                        children: isFa ? "تصمیم‌های کلیدی" : "KEY DECISIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black leading-snug text-white sm:text-3xl",
                                        children: isFa ? "انتخاب‌هایی که ساختار راهکار را شکل دادند." : "Architectural choices that shaped the solution."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "divide-y divide-white/15 border-t border-white/15",
                                children: project.decisions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "grid grid-cols-[2.5rem_1fr] gap-3 py-5 text-sm leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "font-mono text-xs text-[#7890b0]",
                                                children: [
                                                    "0",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-200",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-20 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-extrabold text-[var(--accent)]",
                                        children: isFa ? "خروجی پروژه" : "OUTCOMES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black sm:text-4xl",
                                        children: isFa ? "نتیجه‌ای قابل نگهداری، نه فقط یک دموی موقت." : "A maintainable result, not just a temporary demo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: project.outcomes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-start gap-3 rounded-[22px_12px_22px_12px] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-relaxed text-[var(--text)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                className: "mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "block text-xs leading-relaxed text-[var(--text-muted)]",
                                children: isFa ? "برای حفظ دقت و محرمانگی، فقط نتایجی نمایش داده شده‌اند که بدون انتشار اطلاعات مشتری قابل بیان هستند." : "To maintain accuracy and confidentiality, only outcomes that can be shared without disclosing client data are listed."
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-20 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--text-muted)]",
                                        children: isFa ? "پروژه بعدی" : "Next Project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-xl font-black sm:text-3xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/projects/${nextProject.slug}`,
                                            className: "transition-colors hover:text-[var(--accent)]",
                                            children: nextProject.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/projects/${nextProject.slug}`,
                                "aria-label": isFa ? `پروژه بعدی: ${nextProject.title}` : `Next project: ${nextProject.title}`,
                                className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--navy)] text-white transition-transform hover:-translate-x-1 ltr:hover:translate-x-1 dark:bg-[var(--accent)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(NextArrow, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/projects/[slug]/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d3e2b22e._.js.map