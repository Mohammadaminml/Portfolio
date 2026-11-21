import { Locale } from "@/types/site";

const shared = {
  techs: ["React", "Django", "Node.js", "MongoDB", "AI", "Python"],
};

export const translations = {
  en: {
    locale: "en-US",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      shop: "Shop",
      statistics: "Statistics",
      education: "Education",
      publications: "Publications",
      techStack: "Tech Stack",
      contact: "Contact",
      blog: "Blog",
      more: "More",
      portfolio: "Mohammad Amin Mollakazemiha",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      role: "Full Stack Developer",
      firstName: "Mohammadamin",
      lastName: "Mollakazemiha",
      description: "I write code that creates meaningful digital experiences.",
      eyebrow: "Software Engineer · Product Builder",
      availability: "Available for selected projects",
      experienceBadge: "6+ years of experience",
      projects: "View Projects",
      contact: "Contact Me",
      imageAlt: "Mohammadamin Mollakazemiha",
      techs: shared.techs,
    },
    home: {
      services: {
        kicker: "What I do",
        title: "From idea to a reliable digital product",
        description:
          "I combine product thinking, clean engineering, and modern technology to create experiences that are useful, fast, and built to grow.",
        items: [
          [
            "Frontend Engineering",
            "Responsive, accessible, and polished interfaces built with React and modern frontend architecture.",
          ],
          [
            "Backend & APIs",
            "Secure and scalable backend systems, APIs, databases, and integrations designed for real-world products.",
          ],
          [
            "AI Solutions",
            "Practical AI, machine learning, and computer vision solutions that turn complex data into useful outcomes.",
          ],
        ] as [string, string][],
      },
      stats: [
        ["6+", "Years of coding"],
        ["60+", "Delivered projects"],
        ["150+", "Students mentored"],
        ["3", "Published papers"],
      ] as [string, string][],
      cta: {
        kicker: "Have a project in mind?",
        title: "Let’s create something that stands out.",
        description:
          "I am open to selected collaborations, product development, and consulting opportunities.",
        button: "Start a conversation",
      },
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I am a Full Stack Developer focused on designing and building modern web applications. I enjoy creating scalable, high-performance solutions and delivering exceptional user experiences through clean and efficient code.",
        "Since 2020, I have been working professionally in software development, specializing in both frontend and backend technologies. My expertise includes React, Node.js, Django, Python, JavaScript, TypeScript, MongoDB, PostgreSQL, MySQL, and modern web architectures.",
        "In addition to web development, I have experience in Artificial Intelligence, Machine Learning, Computer Vision, and software engineering with C and C++. I am passionate about building innovative digital products that combine functionality, performance, and great design.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        ["Frontend Developer", "Delta Company", "2026 - Present"],
        ["Android & iOS Developer", "XenoTech Group", "2023 - Present"],
        ["Full Stack Developer", "XenoTech Group", "2023 - Present"],
        ["Full Stack Developer", "Ponisha Company", "2020 - Present"],
        ["Programming & AI Instructor", "Udemy", "2020 - Present"],
        ["Programming & AI Instructor", "Coursera", "2020 - Present"],
      ] as [string, string, string][],
    },
    contact: {
      title: "Contact Me",
      heading: "Let's Build Something Great",
      description:
        "You can contact me through social media for collaborations, projects, or consulting opportunities.",
      email: "Email",
    },
    footer: {
      name: "Mohammadamin Mollakazemiha",
      role: "Full Stack Developer",
      rights: "© 2026 All Rights Reserved.",
    },
  },
  fa: {
    locale: "fa-IR",
    nav: {
      home: "خانه",
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "مسیر حرفه‌ای",
      projects: "پروژه‌ها",
      shop: "فروشگاه",
      statistics: "دستاوردها",
      education: "تحصیلات",
      publications: "مقالات",
      techStack: "جعبه‌ابزار من",
      contact: "تماس با من",
      blog: "وبلاگ",
      more: "بیشتر",
      portfolio: "محمدامین ملاکاظمی‌ها",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
    },
    hero: {
      role: "توسعه‌دهنده فول‌استک",
      firstName: "محمدامین",
      lastName: "ملاکاظمی‌ها",
      description: "با کدنویسی، تجربه‌های دیجیتال ماندگار می‌سازم.",
      eyebrow: "مهندس نرم‌افزار · سازنده محصول",
      availability: "آماده همکاری در پروژه‌های منتخب",
      experienceBadge: "بیش از ۶ سال تجربه",
      projects: "دیدن پروژه‌ها",
      contact: "تماس با من",
      imageAlt: "محمدامین ملاکاظمی‌ها",
      techs: shared.techs,
    },
    home: {
      services: {
        kicker: "کاری که انجام می‌دهم",
        title: "از یک ایده خام تا محصولی که می‌شود به آن اعتماد کرد",
        description:
          "نگاه محصول، مهندسی اصولی و فناوری روز را کنار هم می‌گذارم تا نتیجه، سریع، کاربردی و آماده رشد باشد.",
        items: [
          [
            "طراحی و توسعه رابط کاربری",
            "رابط‌هایی سریع، واکنش‌گرا و خوش‌ساخت که استفاده از محصول را ساده و لذت‌بخش می‌کنند.",
          ],
          [
            "بک‌اند، API و زیرساخت",
            "معماری امن و توسعه‌پذیر، پایگاه داده و سرویس‌هایی که زیر بار واقعی قابل اتکا هستند.",
          ],
          [
            "راهکارهای هوش مصنوعی",
            "استفاده عملی از یادگیری ماشین و بینایی کامپیوتر برای حل مسئله‌های واقعی کسب‌وکار.",
          ],
        ] as [string, string][],
      },
      stats: [
        ["۶+", "سال برنامه‌نویسی"],
        ["۶۰+", "پروژه تحویل‌شده"],
        ["۱۵۰+", "دانشجوی آموزش‌دیده"],
        ["۳", "مقاله منتشرشده"],
      ] as [string, string][],
      cta: {
        kicker: "ایده‌ای دارید؟",
        title: "بیایید چیزی متمایز بسازیم.",
        description: "برای همکاری، توسعه محصول و مشاوره آماده‌ام.",
        button: "شروع گفتگو",
      },
    },
    about: {
      title: "من کی هستم؟",
      paragraphs: [
        "من یک توسعه‌دهنده فول‌استک هستم که به نقطه تلاقی مهندسی، طراحی و محصول علاقه دارد. هدفم فقط تحویل کد نیست؛ می‌خواهم چیزی بسازم که واقعاً برای کاربر ارزش ایجاد کند.",
        "از سال ۱۳۹۹ به‌صورت حرفه‌ای در حوزه نرم‌افزار فعالیت می‌کنم. در این مسیر با React، Node.js، Django، Python، JavaScript، TypeScript و پایگاه‌های داده مختلف محصولات متنوعی ساخته‌ام.",
        "در کنار توسعه وب، در هوش مصنوعی، یادگیری ماشین و بینایی کامپیوتر هم تجربه دارم. یادگیری مستمر، حل مسئله و ساختن محصولاتی که خوب کار می‌کنند و خوب به نظر می‌رسند، بخش مهمی از مسیر من است.",
      ],
    },
    experience: {
      title: "مسیر حرفه‌ای من",
      items: [
        ["توسعه‌دهنده فرانت‌اند", "شرکت دلتا", "۱۴۰۵ تا امروز"],
        ["توسعه‌دهنده اندروید و iOS", "گروه زنو‌تک", "۱۴۰۲ تا امروز"],
        ["توسعه‌دهنده فول‌استک", "گروه زنو‌تک", "۱۴۰۲ تا امروز"],
        ["توسعه‌دهنده فول‌استک", "شرکت پونیشا", "۱۳۹۹ تا امروز"],
        ["مدرس برنامه‌نویسی و هوش مصنوعی", "Udemy", "۱۳۹۹ تا امروز"],
        ["مدرس برنامه‌نویسی و هوش مصنوعی", "Coursera", "۱۳۹۹ تا امروز"],
      ] as [string, string, string][],
    },
    contact: {
      title: "تماس با من",
      heading: "بیایید درباره ایده شما صحبت کنیم",
      description:
        "برای توسعه محصول، مشاوره فنی یا شروع یک همکاری تازه، از یکی از راه‌های زیر پیام بدهید. معمولاً در کوتاه‌ترین زمان پاسخ می‌دهم.",
      email: "ارسال ایمیل",
    },
    footer: {
      name: "محمدامین ملاکاظمی‌ها",
      role: "توسعه‌دهنده فول‌استک",
      rights: "تمامی حقوق سایت متعلق به محمدامین ملاکاظمی‌ها می‌باشد.",
    },
  },
};

export const getTranslations = (locale: Locale) => translations[locale];