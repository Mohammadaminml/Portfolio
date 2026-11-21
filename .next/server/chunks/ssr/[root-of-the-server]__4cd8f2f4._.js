module.exports = [
"[project]/.next-internal/server/app/[lang]/blog/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/blogPosts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getBlogPost",
    ()=>getBlogPost
]);
const blogPosts = [
    {
        slug: "from-idea-to-maintainable-mvp",
        title: "چطور یک MVP بسازیم که بعداً مجبور نشویم دورش بیندازیم؟",
        excerpt: "سرعت در ساخت نسخه اولیه مهم است، اما تصمیم‌های عجولانه می‌توانند هزینه نسخه دوم را چند برابر کنند. این مسیر، تعادل میان سرعت و معماری را توضیح می‌دهد.",
        category: "معماری محصول",
        date: "۱۴۰۵/۰۵/۲۳",
        readTime: "۸ دقیقه",
        accent: "coral",
        sections: [
            {
                id: "mvp-goal",
                title: "هدف MVP یادگیری است، نه نمایش قابلیت‌ها",
                paragraphs: [
                    "یک MVP خوب کوچک‌ترین نسخه‌ای نیست که بتوان آن را منتشر کرد؛ کوچک‌ترین نسخه‌ای است که یک فرض مهم درباره کاربر یا بازار را با داده واقعی آزمایش کند. پیش از انتخاب فناوری، باید دقیقاً بدانیم کدام سؤال کسب‌وکار قرار است پاسخ داده شود.",
                    "وقتی هدف مبهم باشد، فهرست قابلیت‌ها رشد می‌کند و محصول اولیه به نسخه‌ای ناقص از محصول نهایی تبدیل می‌شود. تعریف یک سنجه روشن—مثلاً تکمیل موفق یک جریان اصلی—مرز پروژه را مشخص می‌کند."
                ],
                bullets: [
                    "یک مسئله اصلی و یک گروه کاربر مشخص",
                    "یک جریان کامل از ورود تا دریافت ارزش",
                    "یک سنجه برای تصمیم‌گیری درباره ادامه مسیر"
                ]
            },
            {
                id: "architecture",
                title: "معماری کمینه، اما قابل تغییر",
                paragraphs: [
                    "در نسخه اولیه نیازی به معماری پیچیده و چندین سرویس مستقل نداریم. یک monolith ماژولار معمولاً سرعت بیشتری می‌دهد و در عین حال مرزهای دامنه را حفظ می‌کند.",
                    "نقطه مهم، جداسازی تصمیم‌هایی است که احتمال تغییر دارند: سرویس پرداخت، ارسال پیام، ذخیره فایل و منطق قیمت‌گذاری نباید در تمام کد پخش شوند. یک interface کوچک می‌تواند هزینه تغییر آینده را به‌شدت کاهش دهد."
                ],
                bullets: [
                    "مرز روشن میان UI، منطق دامنه و دسترسی به داده",
                    "قرارداد مشخص برای سرویس‌های خارجی",
                    "migration قابل بازگشت برای تغییرات پایگاه داده"
                ]
            },
            {
                id: "quality",
                title: "کیفیت را در مسیر اصلی متمرکز کنید",
                paragraphs: [
                    "تست‌کردن تمام جزئیات یک MVP منطقی نیست، اما جریان اصلی محصول باید قابل اعتماد باشد. تست integration برای ثبت‌نام، پرداخت یا عملیات مرکزی ارزش بیشتری از ده‌ها تست کم‌اثر دارد.",
                    "ثبت خطا، analytics پایه و نسخه پشتیبان نیز قابلیت جانبی نیستند؛ آن‌ها ابزار یادگیری و بازیابی محصول‌اند. بدون مشاهده رفتار واقعی، MVP هدف خودش را از دست می‌دهد."
                ]
            },
            {
                id: "next",
                title: "چه زمانی معماری را گسترش دهیم؟",
                paragraphs: [
                    "مقیاس‌پذیری باید پاسخ به یک فشار واقعی باشد: افزایش ترافیک، رشد تیم یا کندشدن چرخه انتشار. تا پیش از آن، سادگی یک مزیت رقابتی است.",
                    "اگر مرزهای ماژول‌ها درست طراحی شده باشند، جداکردن یک بخش پرترافیک یا افزودن queue تصمیمی مرحله‌ای خواهد بود، نه بازنویسی کامل محصول."
                ]
            }
        ]
    },
    {
        slug: "practical-ai-product-roadmap",
        title: "مسیر واقعی ساخت یک قابلیت هوش مصنوعی در محصول",
        excerpt: "از تعریف مسئله و داده تا ارزیابی مدل و مانیتورینگ؛ مراحلی که یک دموی هوش مصنوعی را به قابلیت قابل اتکا تبدیل می‌کنند.",
        category: "هوش مصنوعی",
        date: "۱۴۰۵/۰۵/۲۰",
        readTime: "۱۰ دقیقه",
        accent: "mint",
        sections: [
            {
                id: "problem",
                title: "از مدل شروع نکنید؛ از تصمیم شروع کنید",
                paragraphs: [
                    "اولین سؤال نباید این باشد که از کدام مدل استفاده کنیم. باید بدانیم خروجی سیستم قرار است کدام تصمیم یا فرایند را بهتر کند و هزینه یک پاسخ اشتباه چقدر است.",
                    "برای دسته‌بندی پیام پشتیبانی، خطای مدل می‌تواند باعث ارجاع به تیم اشتباه شود؛ در تشخیص پزشکی، همان خطا پیامد کاملاً متفاوتی دارد. معیار ارزیابی باید از ریسک محصول بیاید."
                ],
                bullets: [
                    "کاربر خروجی مدل چه کسی است؟",
                    "در صورت اطمینان پایین چه اتفاقی می‌افتد؟",
                    "آیا امکان بازبینی انسانی وجود دارد؟"
                ]
            },
            {
                id: "data",
                title: "کیفیت داده سقف کیفیت محصول است",
                paragraphs: [
                    "داده آزمایشگاهی معمولاً تمیزتر از ورودی واقعی کاربران است. نمونه‌های ناقص، زبان محاوره‌ای، نور متفاوت تصویر و تغییر رفتار کاربران بعد از انتشار باید از ابتدا در ارزیابی دیده شوند.",
                    "یک مجموعه ارزیابی کوچک اما نماینده، از یک dataset بزرگ و نامرتبط ارزشمندتر است. نمونه‌ها باید نسخه‌بندی شوند تا بدانیم هر تغییر مدل دقیقاً چه چیزی را بهتر یا بدتر کرده است."
                ]
            },
            {
                id: "delivery",
                title: "مدل را داخل یک سیستم قابل کنترل قرار دهید",
                paragraphs: [
                    "محصول هوشمند فقط endpoint مدل نیست. timeout، retry، محدودیت هزینه، cache و fallback بخشی از تجربه کاربر هستند.",
                    "ثبت نسخه مدل و ورودی‌های غیرحساس کمک می‌کند خطاها قابل بازتولید باشند. در کاربردهای حساس باید حداقل داده لازم ذخیره و سیاست حذف آن مشخص شود."
                ],
                bullets: [
                    "fallback مشخص برای خطا یا اطمینان پایین",
                    "بودجه زمانی و مالی برای هر درخواست",
                    "مانیتورینگ کیفیت، latency و نرخ خطا"
                ]
            },
            {
                id: "iteration",
                title: "انتشار تدریجی و حلقه بازخورد",
                paragraphs: [
                    "قابلیت AI بهتر است ابتدا برای گروه کوچکی از کاربران فعال شود. مقایسه خروجی با رفتار قبلی و امکان گزارش پاسخ نامناسب، داده لازم برای iteration بعدی را فراهم می‌کند.",
                    "هدف نهایی بالاترین امتیاز benchmark نیست؛ بهبود قابل‌اندازه‌گیری تجربه یا عملیات محصول است."
                ]
            }
        ]
    },
    {
        slug: "react-performance-decisions",
        title: "بهینه‌سازی React؛ از اندازه‌گیری تا تصمیم درست",
        excerpt: "قبل از memo کردن همه‌چیز باید بفهمیم زمان کاربر کجا مصرف می‌شود. راهنمایی عملی برای bundle، رندر، تصاویر و تعاملات سریع‌تر.",
        category: "مهندسی فرانت‌اند",
        date: "۱۴۰۵/۰۵/۱۷",
        readTime: "۷ دقیقه",
        accent: "violet",
        sections: [
            {
                id: "measure",
                title: "اول گلوگاه را اندازه بگیرید",
                paragraphs: [
                    "کندی می‌تواند از شبکه، اجرای JavaScript، رندر React یا یک تصویر بزرگ بیاید. بدون اندازه‌گیری، بهینه‌سازی اغلب روی بخشی انجام می‌شود که کاربر اصلاً آن را احساس نمی‌کند.",
                    "Core Web Vitals، پنل Performance مرورگر و React Profiler سه زاویه متفاوت می‌دهند: تجربه واقعی بارگذاری، کار main thread و هزینه رندر کامپوننت‌ها."
                ],
                bullets: [
                    "LCP برای محتوای اصلی صفحه",
                    "INP برای پاسخ‌گویی به تعامل",
                    "CLS برای ثبات چیدمان"
                ]
            },
            {
                id: "bundle",
                title: "هر صفحه نباید هزینه کل محصول را بپردازد",
                paragraphs: [
                    "تقسیم کد در سطح route معمولاً بیشترین بازده را دارد. کاربر صفحه تماس نباید کد ویرایشگر مقاله یا نمودارهای داشبورد را دریافت کند.",
                    "کتابخانه‌های بزرگ را فقط با نگاه به حجم نصب قضاوت نکنید. خروجی production و مقدار واقعی کدی که وارد bundle می‌شود معیار درست‌تری است. chunkهای پایدار نیز cache بازدیدهای بعدی را بهتر می‌کنند."
                ]
            },
            {
                id: "render",
                title: "رندر کمتر همیشه به معنای سرعت بیشتر نیست",
                paragraphs: [
                    "استفاده بی‌هدف از memo، useMemo و useCallback پیچیدگی ایجاد می‌کند و ممکن است هزینه مقایسه از خود رندر بیشتر شود. ابتدا کامپوننت پرهزینه یا تغییر state گسترده را در Profiler پیدا کنید.",
                    "نزدیک نگه‌داشتن state به مصرف‌کننده، تقسیم contextهای بزرگ و virtualize کردن فهرست‌های طولانی معمولاً اثر واضح‌تری دارند."
                ]
            },
            {
                id: "perceived",
                title: "سرعت ادراکی بخشی از مهندسی است",
                paragraphs: [
                    "ابعاد ثابت تصویر جلوی پرش صفحه را می‌گیرد، skeleton انتظار را قابل فهم می‌کند و نمایش فوری بازخورد کلیک باعث می‌شود رابط سریع‌تر احساس شود.",
                    "بهینه‌سازی کامل زمانی است که عددهای فنی و تجربه انسانی هر دو بهتر شوند؛ نه وقتی فقط یک امتیاز آزمایشگاهی بالا می‌رود."
                ]
            }
        ]
    }
];
const getBlogPost = (slug)=>blogPosts.find((post)=>post.slug === slug);
const __TURBOPACK__default__export__ = blogPosts;
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
"[project]/src/app/[lang]/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPosts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/blogPosts.ts [app-rsc] (ecmascript)");
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
        path: "/blog",
        title: lang === "fa" ? "مقالات و یادداشت‌های فنی | محمدامین ملاکاظمی‌ها" : "Technical Articles | Mohammadamin Mollakazemiha"
    });
}
async function BlogPage({ params }) {
    const { lang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidLocale"])(lang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isFa = lang === "fa";
    const ArrowIcon = isFa ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiArrowUpLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiArrowUpRight"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-4xl space-y-10 px-6 py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold tracking-tight sm:text-4xl",
                        children: isFa ? "مقالات و یادداشت‌های فنی" : "Technical Articles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-[var(--text-muted)]",
                        children: isFa ? "تجربه‌ها و تصمیم‌های مهندسی در معماری محصول، فرانت‌اند و هوش مصنوعی." : "Engineering notes on product architecture, frontend performance, and applied AI."
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogPosts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"].map((post)=>{
                    const accent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACCENT_STYLES"][post.accent];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:shadow-md ${accent.border}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-full px-2.5 py-1 font-semibold ${accent.badge}`,
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    post.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiClock"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this),
                                                    post.readTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 text-xl font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${lang}/blog/${post.slug}`,
                                    className: "transition-colors hover:text-[var(--accent)]",
                                    children: post.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-relaxed text-[var(--text-muted)]",
                                children: post.excerpt
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/blog/${post.slug}`,
                                className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline",
                                children: [
                                    isFa ? "مطالعه مقاله" : "Read article",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, post.slug, true, {
                        fileName: "[project]/src/app/[lang]/blog/page.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/blog/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/blog/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/blog/page.tsx [app-rsc] (ecmascript)"));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__4cd8f2f4._.js.map