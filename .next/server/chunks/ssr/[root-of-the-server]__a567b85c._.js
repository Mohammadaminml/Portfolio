module.exports = [
"[project]/.next-internal/server/app/[lang]/projects/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/app/[lang]/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage,
    "generateMetadata",
    ()=>generateMetadata
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
async function generateMetadata({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
        locale: lang,
        path: "/projects",
        title: lang === "fa" ? "پروژه‌های منتخب | محمدامین ملاکاظمی‌ها" : "Selected Projects | Mohammadamin Mollakazemiha",
        description: lang === "fa" ? "مطالعات موردی پروژه‌های وب، موبایل و هوش مصنوعی با تمرکز بر مسئله، تصمیم‌های فنی و نتایج." : "Case studies across web, mobile, and AI engineering focusing on problems, architecture decisions, and outcomes."
    });
}
async function ProjectsPage({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isFa = lang === "fa";
    const ArrowIcon = isFa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowRight"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "mx-auto max-w-6xl px-6 py-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-3xl space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-extrabold text-[var(--accent)]",
                        children: isFa ? "پروژه‌های منتخب" : "SELECTED PROJECTS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl",
                        children: isFa ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "پشت هر خروجی، یک مسئله",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fa-hero-highlight",
                                    children: "واقعی وجود دارد."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Behind every product, there is a",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fa-hero-highlight",
                                    children: "real-world problem."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base",
                        children: isFa ? "در این بخش فقط ابزارها را فهرست نکرده‌ام؛ می‌توانید مسئله، تصمیم‌های فنی و مسیر رسیدن به راهکار را ببینید." : "Rather than just listing tools, each case study walks through the problem, architectural trade-offs, and the path to the final solution."
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-14 grid gap-6 md:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>{
                    const accent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACCENT_STYLES"][project.accent];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `sig-card group flex flex-col overflow-hidden ${accent.border}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/projects/${project.slug}`,
                                tabIndex: -1,
                                "aria-hidden": "true",
                                className: "relative block aspect-[16/10] w-full overflow-hidden bg-[var(--navy)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: project.image,
                                        alt: project.imageAlt || project.title,
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-col p-6 sm:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs font-bold text-[var(--accent)]",
                                                children: project.index
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                className: `rounded-full px-3 py-1 text-xs font-semibold ${accent.badge}`,
                                                children: project.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-5 text-xl font-black leading-snug sm:text-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/projects/${project.slug}`,
                                            className: "transition-colors hover:text-[var(--accent)]",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]",
                                        children: project.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        dir: "ltr",
                                        className: "mt-5 flex flex-wrap justify-start gap-1.5 rtl:justify-end",
                                        children: project.tech.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]",
                                                children: tech
                                            }, tech, false, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-[var(--border)] pt-5 text-xs font-extrabold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/projects/${project.slug}`,
                                                "aria-label": isFa ? `مطالعه جزئیات پروژه ${project.title}` : `Read case study: ${project.title}`,
                                                className: "inline-flex items-center gap-1.5 text-[var(--accent)] transition-transform hover:-translate-x-0.5 ltr:hover:translate-x-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isFa ? "مطالعه پروژه" : "Read Case Study"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.liveUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isFa ? "نسخه زنده" : "Live Demo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaArrowUpRightFromSquare"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this),
                                            project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": isFa ? `مخزن GitHub پروژه ${project.title}` : `GitHub repository for ${project.title}`,
                                                className: "inline-flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaGithub"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        ]
                    }, project.slug, true, {
                        fileName: "[project]/src/app/[lang]/projects/page.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/projects/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/projects/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/projects/page.tsx [app-rsc] (ecmascript)"));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__a567b85c._.js.map