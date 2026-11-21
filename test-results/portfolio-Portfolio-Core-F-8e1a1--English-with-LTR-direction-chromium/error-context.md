# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio Core Flows >> switches language to English with LTR direction
- Location: e2e\portfolio.spec.ts:12:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /EN/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "رفتن به محتوای اصلی" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - navigation "Primary Navigation" [ref=e4]:
      - link "محمدامین ملاکاظمی‌ها" [ref=e5] [cursor=pointer]:
        - /url: /fa
      - generic [ref=e6]:
        - link "پروژه‌ها" [ref=e7] [cursor=pointer]:
          - /url: /fa/projects
        - link "سوابق" [ref=e8] [cursor=pointer]:
          - /url: /fa#experience
        - link "مهارت‌ها" [ref=e9] [cursor=pointer]:
          - /url: /fa#skills
        - link "مقالات" [ref=e10] [cursor=pointer]:
          - /url: /fa#articles
        - link "تماس" [ref=e11] [cursor=pointer]:
          - /url: /fa#contact
        - link "فروشگاه" [ref=e12] [cursor=pointer]:
          - /url: /fa/shop
      - generic [ref=e13]:
        - link "تغییر زبان به انگلیسی" [ref=e14] [cursor=pointer]:
          - /url: /en
          - text: EN
        - button "Switch to dark mode" [ref=e15]
  - main [ref=e18]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: آماده همکاری در پروژه‌های نرم‌افزاری و هوش مصنوعی
            - heading "طراحی و مهندسی محصولات وب مقیاس‌پذیر" [level=1] [ref=e26]
            - paragraph [ref=e27]: مهندس نرم‌افزار و توسعه‌دهنده فول‌استک؛ طراحی و پیاده‌سازی سیستم‌های مقیاس‌پذیر وب و هوش مصنوعی با React، Next.js، Django و Python.
            - generic [ref=e28]:
              - link "مشاهده پروژه‌ها" [ref=e29] [cursor=pointer]:
                - /url: /fa/projects
              - link "دانلود رزومه" [ref=e33] [cursor=pointer]:
                - /url: /resume.pdf
          - generic [ref=e37]:
            - img "محمدامین ملاکاظمی‌ها" [ref=e39]
            - generic [ref=e40]:
              - generic [ref=e41]: تمرکز اصلی
              - strong [ref=e42]: Next.js • Django • AI
            - generic [ref=e43]:
              - generic [ref=e44]: مطالعات موردی
              - strong [ref=e45]: "+9"
        - generic [ref=e47]:
          - generic [ref=e48]: NEXT.JS
          - generic [ref=e49]: •
          - generic [ref=e50]: REACT 19
          - generic [ref=e51]: •
          - generic [ref=e52]: TYPESCRIPT
          - generic [ref=e53]: •
          - generic [ref=e54]: DJANGO DRF
          - generic [ref=e55]: •
          - generic [ref=e56]: POSTGRESQL
          - generic [ref=e57]: •
          - generic [ref=e58]: DOCKER
          - generic [ref=e59]: •
          - generic [ref=e60]: RAG & AI
      - generic [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - text: گزیده آثار
              - heading "پروژه‌ها و مطالعات موردی" [level=2] [ref=e65]
            - link "مشاهده همه 9 پروژه" [ref=e66] [cursor=pointer]:
              - /url: /fa/projects
          - generic [ref=e67]:
            - article [ref=e68]:
              - link "نمایی از داشبورد فارسی FreelancerFlow برای مدیریت پروژه‌ها و فعالیت‌های فریلنسری ۰۱" [ref=e69] [cursor=pointer]:
                - /url: /fa/projects/freelancer-flow
                - img "نمایی از داشبورد فارسی FreelancerFlow برای مدیریت پروژه‌ها و فعالیت‌های فریلنسری" [ref=e70]
                - generic [ref=e71]: ۰۱
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: مدیریت یکپارچه فریلنسری
                  - heading "FreelancerFlow" [level=3] [ref=e75]
                  - paragraph [ref=e76]: فضای کاری فارسی و واکنش‌گرا برای مدیریت مشتری‌ها، پروژه‌ها، وظایف، قراردادها و امور مالی فریلنسرها.
                - generic [ref=e77]:
                  - generic [ref=e78]:
                    - generic [ref=e79]: React
                    - generic [ref=e80]: Vite
                    - generic [ref=e81]: LocalStorage
                  - link "جزئیات" [ref=e82] [cursor=pointer]:
                    - /url: /fa/projects/freelancer-flow
            - article [ref=e86]:
              - link "تصویر مفهومی پرونده‌های دیجیتال و سامانه مدیریت بیماران ۰۲" [ref=e87] [cursor=pointer]:
                - /url: /fa/projects/patient-management-system
                - img "تصویر مفهومی پرونده‌های دیجیتال و سامانه مدیریت بیماران" [ref=e88]
                - generic [ref=e89]: ۰۲
              - generic [ref=e90]:
                - generic [ref=e91]:
                  - generic [ref=e92]: نرم‌افزار سلامت
                  - heading "سامانه مدیریت بیماران" [level=3] [ref=e93]
                  - paragraph [ref=e94]: سامانه‌ای برای ثبت، بازیابی و مدیریت منظم اطلاعات بیماران و پرونده‌های پزشکی.
                - generic [ref=e95]:
                  - generic [ref=e96]:
                    - generic [ref=e97]: C
                    - generic [ref=e98]: Data Structures
                    - generic [ref=e99]: File Handling
                  - link "جزئیات" [ref=e100] [cursor=pointer]:
                    - /url: /fa/projects/patient-management-system
            - article [ref=e104]:
              - link "تصویر مفهومی معماری یک محصول فول‌استک تحت وب ۰۳" [ref=e105] [cursor=pointer]:
                - /url: /fa/projects/full-stack-web-platforms
                - img "تصویر مفهومی معماری یک محصول فول‌استک تحت وب" [ref=e106]
                - generic [ref=e107]: ۰۳
              - generic [ref=e108]:
                - generic [ref=e109]:
                  - generic [ref=e110]: توسعه محصول
                  - heading "محصولات فول‌استک تحت وب" [level=3] [ref=e111]
                  - paragraph [ref=e112]: اپلیکیشن‌های مدرن با رابط React، بک‌اند Django و پایگاه داده PostgreSQL.
                - generic [ref=e113]:
                  - generic [ref=e114]:
                    - generic [ref=e115]: React
                    - generic [ref=e116]: Django
                    - generic [ref=e117]: PostgreSQL
                  - link "جزئیات" [ref=e118] [cursor=pointer]:
                    - /url: /fa/projects/full-stack-web-platforms
            - article [ref=e122]:
              - link "تصویر مفهومی اپلیکیشن موبایل متصل به زیرساخت ابری ۰۴" [ref=e123] [cursor=pointer]:
                - /url: /fa/projects/mobile-backend-solutions
                - img "تصویر مفهومی اپلیکیشن موبایل متصل به زیرساخت ابری" [ref=e124]
                - generic [ref=e125]: ۰۴
              - generic [ref=e126]:
                - generic [ref=e127]:
                  - generic [ref=e128]: اپلیکیشن موبایل
                  - heading "راهکارهای موبایل و بک‌اند" [level=3] [ref=e129]
                  - paragraph [ref=e130]: اپلیکیشن‌های موبایل متصل به سرویس‌های بک‌اند امن و توسعه‌پذیر.
                - generic [ref=e131]:
                  - generic [ref=e132]:
                    - generic [ref=e133]: Kotlin
                    - generic [ref=e134]: Node.js
                    - generic [ref=e135]: MongoDB
                  - link "جزئیات" [ref=e136] [cursor=pointer]:
                    - /url: /fa/projects/mobile-backend-solutions
        - generic [ref=e140]:
          - generic [ref=e141]:
            - heading "مهارت‌های فنی" [level=2] [ref=e142]
            - paragraph [ref=e143]: فناوری‌ها و ابزارهایی که در توسعه محصولات وب استفاده می‌کنم
          - generic [ref=e144]:
            - generic [ref=e145]:
              - heading "فرانت‌اند Frontend" [level=3] [ref=e146]:
                - generic [ref=e147]: فرانت‌اند
                - generic [ref=e148]: Frontend
              - generic [ref=e149]:
                - generic [ref=e150]:
                  - generic [ref=e151]:
                    - generic [ref=e152]: HTML
                    - generic [ref=e153]: 100%
                  - progressbar "HTML" [ref=e154]
                - generic [ref=e156]:
                  - generic [ref=e157]:
                    - generic [ref=e158]: CSS
                    - generic [ref=e159]: 100%
                  - progressbar "CSS" [ref=e160]
                - generic [ref=e162]:
                  - generic [ref=e163]:
                    - generic [ref=e164]: JavaScript
                    - generic [ref=e165]: 100%
                  - progressbar "JavaScript" [ref=e166]
                - generic [ref=e168]:
                  - generic [ref=e169]:
                    - generic [ref=e170]: React
                    - generic [ref=e171]: 100%
                  - progressbar "React" [ref=e172]
                - generic [ref=e174]:
                  - generic [ref=e175]:
                    - generic [ref=e176]: Tailwind
                    - generic [ref=e177]: 90%
                  - progressbar "Tailwind" [ref=e178]
                - generic [ref=e180]:
                  - generic [ref=e181]:
                    - generic [ref=e182]: TypeScript
                    - generic [ref=e183]: 90%
                  - progressbar "TypeScript" [ref=e184]
            - generic [ref=e186]:
              - heading "بک‌اند Backend" [level=3] [ref=e187]:
                - generic [ref=e188]: بک‌اند
                - generic [ref=e189]: Backend
              - generic [ref=e190]:
                - generic [ref=e191]:
                  - generic [ref=e192]:
                    - generic [ref=e193]: Python
                    - generic [ref=e194]: 100%
                  - progressbar "Python" [ref=e195]
                - generic [ref=e197]:
                  - generic [ref=e198]:
                    - generic [ref=e199]: Django
                    - generic [ref=e200]: 100%
                  - progressbar "Django" [ref=e201]
                - generic [ref=e203]:
                  - generic [ref=e204]:
                    - generic [ref=e205]: Node.js
                    - generic [ref=e206]: 100%
                  - progressbar "Node.js" [ref=e207]
                - generic [ref=e209]:
                  - generic [ref=e210]:
                    - generic [ref=e211]: Express
                    - generic [ref=e212]: 90%
                  - progressbar "Express" [ref=e213]
            - generic [ref=e215]:
              - heading "پایگاه داده Database" [level=3] [ref=e216]:
                - generic [ref=e217]: پایگاه داده
                - generic [ref=e218]: Database
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - generic [ref=e221]:
                    - generic [ref=e222]: MongoDB
                    - generic [ref=e223]: 100%
                  - progressbar "MongoDB" [ref=e224]
                - generic [ref=e226]:
                  - generic [ref=e227]:
                    - generic [ref=e228]: MySQL
                    - generic [ref=e229]: 100%
                  - progressbar "MySQL" [ref=e230]
                - generic [ref=e232]:
                  - generic [ref=e233]:
                    - generic [ref=e234]: PostgreSQL
                    - generic [ref=e235]: 90%
                  - progressbar "PostgreSQL" [ref=e236]
        - generic [ref=e238]:
          - generic [ref=e239]:
            - text: ابزارهای روزمره
            - heading "فناوری‌های مورد استفاده" [level=2] [ref=e240]
          - generic [ref=e241]:
            - generic [ref=e242]: React
            - generic [ref=e246]: Python
            - generic [ref=e250]: Node.js
            - generic [ref=e254]: Django
            - generic [ref=e258]: MongoDB
            - generic [ref=e262]: PostgreSQL
            - generic [ref=e266]: Tailwind
            - generic [ref=e270]: Git
            - generic [ref=e274]: Docker
        - generic [ref=e278]:
          - heading "تحصیلات دانشگاهی" [level=2] [ref=e279]
          - generic [ref=e280]:
            - generic [ref=e281]:
              - generic [ref=e282]: ۱۴۰۴ — اکنون
              - heading "کارشناسی ارشد مهندسی کامپیوتر" [level=3] [ref=e288]
              - paragraph [ref=e289]: گرایش مهندسی نرم‌افزار
              - paragraph [ref=e290]: دانشگاه آزاد اسلامی واحد تهران شمال
            - generic [ref=e291]:
              - generic [ref=e292]: ۱۴۰۰ — ۱۴۰۴
              - heading "کارشناسی مهندسی کامپیوتر" [level=3] [ref=e298]
              - paragraph [ref=e299]: گرایش هوش مصنوعی
              - paragraph [ref=e300]: دانشگاه آزاد اسلامی واحد تهران غرب
        - generic [ref=e301]:
          - generic [ref=e302]:
            - text: پژوهش و انتشارات
            - heading "مقالات علمی و کنفرانسی" [level=2] [ref=e303]
          - generic [ref=e304]:
            - link "۱۴۰۴ بلاکچین در کنترل دسترسی سامانه‌های هوشمند سلامت دانشکده رفاه مشاهده مقاله" [ref=e305] [cursor=pointer]:
              - /url: https://vcert.ir/users/qr.php?c=refah2-00810051
              - generic [ref=e306]: ۱۴۰۴
              - heading "بلاکچین در کنترل دسترسی سامانه‌های هوشمند سلامت" [level=3] [ref=e307]
              - paragraph [ref=e308]: دانشکده رفاه
              - generic [ref=e309]: مشاهده مقاله
            - 'link "۱۴۰۵ هوش مصنوعی لبه: معماری‌ها، چالش‌ها و نقش آن در شبکه‌های آینده بیست‌ونهمین کنفرانس ملی علوم کامپیوتر مشاهده مقاله" [ref=e315] [cursor=pointer]':
              - /url: https://civilica.com/l/180631/
              - generic [ref=e316]: ۱۴۰۵
              - 'heading "هوش مصنوعی لبه: معماری‌ها، چالش‌ها و نقش آن در شبکه‌های آینده" [level=3] [ref=e317]'
              - paragraph [ref=e318]: بیست‌ونهمین کنفرانس ملی علوم کامپیوتر
              - generic [ref=e319]: مشاهده مقاله
            - link "۱۴۰۵ هوش مصنوعی مولد در سیستم‌های هوشمند بیست‌ونهمین کنفرانس ملی علوم کامپیوتر مشاهده مقاله" [ref=e325] [cursor=pointer]:
              - /url: https://civilica.com/l/180631/
              - generic [ref=e326]: ۱۴۰۵
              - heading "هوش مصنوعی مولد در سیستم‌های هوشمند" [level=3] [ref=e327]
              - paragraph [ref=e328]: بیست‌ونهمین کنفرانس ملی علوم کامپیوتر
              - generic [ref=e329]: مشاهده مقاله
        - generic [ref=e336]:
          - generic [ref=e337]:
            - text: من کی هستم؟
            - heading "مسیر حرفه‌ای من" [level=2] [ref=e338]
            - generic [ref=e339]:
              - paragraph [ref=e340]: من یک توسعه‌دهنده فول‌استک هستم که به نقطه تلاقی مهندسی، طراحی و محصول علاقه دارد. هدفم فقط تحویل کد نیست؛ می‌خواهم چیزی بسازم که واقعاً برای کاربر ارزش ایجاد کند.
              - paragraph [ref=e341]: از سال ۱۳۹۹ به‌صورت حرفه‌ای در حوزه نرم‌افزار فعالیت می‌کنم. در این مسیر با React، Node.js، Django، Python، JavaScript، TypeScript و پایگاه‌های داده مختلف محصولات متنوعی ساخته‌ام.
          - generic [ref=e342]:
            - article [ref=e343]:
              - generic [ref=e348]:
                - generic [ref=e349]:
                  - heading "توسعه‌دهنده فرانت‌اند" [level=3] [ref=e350]
                  - generic [ref=e351]: ۱۴۰۵ تا امروز
                - paragraph [ref=e352]: شرکت دلتا
            - article [ref=e353]:
              - generic [ref=e358]:
                - generic [ref=e359]:
                  - heading "توسعه‌دهنده اندروید و iOS" [level=3] [ref=e360]
                  - generic [ref=e361]: ۱۴۰۲ تا امروز
                - paragraph [ref=e362]: گروه زنو‌تک
            - article [ref=e363]:
              - generic [ref=e368]:
                - generic [ref=e369]:
                  - heading "توسعه‌دهنده فول‌استک" [level=3] [ref=e370]
                  - generic [ref=e371]: ۱۴۰۲ تا امروز
                - paragraph [ref=e372]: گروه زنو‌تک
            - article [ref=e373]:
              - generic [ref=e378]:
                - generic [ref=e379]:
                  - heading "توسعه‌دهنده فول‌استک" [level=3] [ref=e380]
                  - generic [ref=e381]: ۱۳۹۹ تا امروز
                - paragraph [ref=e382]: شرکت پونیشا
            - article [ref=e383]:
              - generic [ref=e388]:
                - generic [ref=e389]:
                  - heading "مدرس برنامه‌نویسی و هوش مصنوعی" [level=3] [ref=e390]
                  - generic [ref=e391]: ۱۳۹۹ تا امروز
                - paragraph [ref=e392]: Udemy
            - article [ref=e393]:
              - generic [ref=e398]:
                - generic [ref=e399]:
                  - heading "مدرس برنامه‌نویسی و هوش مصنوعی" [level=3] [ref=e400]
                  - generic [ref=e401]: ۱۳۹۹ تا امروز
                - paragraph [ref=e402]: Coursera
        - generic [ref=e403]:
          - generic [ref=e404]:
            - heading "مهارت‌های فنی" [level=2] [ref=e405]
            - paragraph [ref=e406]: فناوری‌ها و ابزارهایی که در توسعه محصولات وب استفاده می‌کنم
          - generic [ref=e407]:
            - generic [ref=e408]:
              - heading "فرانت‌اند Frontend" [level=3] [ref=e409]:
                - generic [ref=e410]: فرانت‌اند
                - generic [ref=e411]: Frontend
              - generic [ref=e412]:
                - generic [ref=e413]:
                  - generic [ref=e414]:
                    - generic [ref=e415]: HTML
                    - generic [ref=e416]: 100%
                  - progressbar "HTML" [ref=e417]
                - generic [ref=e419]:
                  - generic [ref=e420]:
                    - generic [ref=e421]: CSS
                    - generic [ref=e422]: 100%
                  - progressbar "CSS" [ref=e423]
                - generic [ref=e425]:
                  - generic [ref=e426]:
                    - generic [ref=e427]: JavaScript
                    - generic [ref=e428]: 100%
                  - progressbar "JavaScript" [ref=e429]
                - generic [ref=e431]:
                  - generic [ref=e432]:
                    - generic [ref=e433]: React
                    - generic [ref=e434]: 100%
                  - progressbar "React" [ref=e435]
                - generic [ref=e437]:
                  - generic [ref=e438]:
                    - generic [ref=e439]: Tailwind
                    - generic [ref=e440]: 90%
                  - progressbar "Tailwind" [ref=e441]
                - generic [ref=e443]:
                  - generic [ref=e444]:
                    - generic [ref=e445]: TypeScript
                    - generic [ref=e446]: 90%
                  - progressbar "TypeScript" [ref=e447]
            - generic [ref=e449]:
              - heading "بک‌اند Backend" [level=3] [ref=e450]:
                - generic [ref=e451]: بک‌اند
                - generic [ref=e452]: Backend
              - generic [ref=e453]:
                - generic [ref=e454]:
                  - generic [ref=e455]:
                    - generic [ref=e456]: Python
                    - generic [ref=e457]: 100%
                  - progressbar "Python" [ref=e458]
                - generic [ref=e460]:
                  - generic [ref=e461]:
                    - generic [ref=e462]: Django
                    - generic [ref=e463]: 100%
                  - progressbar "Django" [ref=e464]
                - generic [ref=e466]:
                  - generic [ref=e467]:
                    - generic [ref=e468]: Node.js
                    - generic [ref=e469]: 100%
                  - progressbar "Node.js" [ref=e470]
                - generic [ref=e472]:
                  - generic [ref=e473]:
                    - generic [ref=e474]: Express
                    - generic [ref=e475]: 90%
                  - progressbar "Express" [ref=e476]
            - generic [ref=e478]:
              - heading "پایگاه داده Database" [level=3] [ref=e479]:
                - generic [ref=e480]: پایگاه داده
                - generic [ref=e481]: Database
              - generic [ref=e482]:
                - generic [ref=e483]:
                  - generic [ref=e484]:
                    - generic [ref=e485]: MongoDB
                    - generic [ref=e486]: 100%
                  - progressbar "MongoDB" [ref=e487]
                - generic [ref=e489]:
                  - generic [ref=e490]:
                    - generic [ref=e491]: MySQL
                    - generic [ref=e492]: 100%
                  - progressbar "MySQL" [ref=e493]
                - generic [ref=e495]:
                  - generic [ref=e496]:
                    - generic [ref=e497]: PostgreSQL
                    - generic [ref=e498]: 90%
                  - progressbar "PostgreSQL" [ref=e499]
        - generic [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e503]:
              - text: یادداشت‌های مهندسی
              - heading "آخرین مقالات فنی" [level=2] [ref=e504]
            - link "همه مقالات" [ref=e505] [cursor=pointer]:
              - /url: /fa/blog
          - generic [ref=e506]:
            - article [ref=e507]:
              - generic [ref=e508]:
                - generic [ref=e509]: معماری محصول
                - heading [level=3] [ref=e510]:
                  - link "چطور یک MVP بسازیم که بعداً مجبور نشویم دورش بیندازیم؟" [ref=e511] [cursor=pointer]:
                    - /url: /fa/blog/from-idea-to-maintainable-mvp
                - paragraph [ref=e512]: سرعت در ساخت نسخه اولیه مهم است، اما تصمیم‌های عجولانه می‌توانند هزینه نسخه دوم را چند برابر کنند. این مسیر، تعادل میان سرعت و معماری را توضیح می‌دهد.
              - generic [ref=e513]:
                - generic [ref=e514]: ۱۴۰۵/۰۵/۲۳
                - generic [ref=e517]: ۸ دقیقه
            - article [ref=e521]:
              - generic [ref=e522]:
                - generic [ref=e523]: هوش مصنوعی
                - heading [level=3] [ref=e524]:
                  - link "مسیر واقعی ساخت یک قابلیت هوش مصنوعی در محصول" [ref=e525] [cursor=pointer]:
                    - /url: /fa/blog/practical-ai-product-roadmap
                - paragraph [ref=e526]: از تعریف مسئله و داده تا ارزیابی مدل و مانیتورینگ؛ مراحلی که یک دموی هوش مصنوعی را به قابلیت قابل اتکا تبدیل می‌کنند.
              - generic [ref=e527]:
                - generic [ref=e528]: ۱۴۰۵/۰۵/۲۰
                - generic [ref=e531]: ۱۰ دقیقه
            - article [ref=e535]:
              - generic [ref=e536]:
                - generic [ref=e537]: مهندسی فرانت‌اند
                - heading [level=3] [ref=e538]:
                  - link "بهینه‌سازی React؛ از اندازه‌گیری تا تصمیم درست" [ref=e539] [cursor=pointer]:
                    - /url: /fa/blog/react-performance-decisions
                - paragraph [ref=e540]: قبل از memo کردن همه‌چیز باید بفهمیم زمان کاربر کجا مصرف می‌شود. راهنمایی عملی برای bundle، رندر، تصاویر و تعاملات سریع‌تر.
              - generic [ref=e541]:
                - generic [ref=e542]: ۱۴۰۵/۰۵/۱۷
                - generic [ref=e545]: ۷ دقیقه
        - generic [ref=e550]:
          - generic [ref=e551]:
            - text: شروع همکاری
            - heading "آماده ساخت محصول بعدی شما هستم" [level=2] [ref=e552]
            - paragraph [ref=e553]: برای موقعیت‌های شغلی فول‌استک، مشاوره معماری فرانت‌اند/بک‌اند یا طراحی و توسعه اختصاصی پیام بدهید.
          - link "ارسال ایمیل مستقیم" [ref=e554] [cursor=pointer]:
            - /url: mailto:contact@mohammadaminmollakazemiha.ir
  - contentinfo [ref=e558]:
    - generic [ref=e559]:
      - paragraph [ref=e560]: © 2026 محمدامین ملاکاظمی‌ها — ساخته شده با Next.js و TypeScript
      - generic [ref=e561]:
        - link "GitHub" [ref=e562] [cursor=pointer]:
          - /url: https://github.com/Mohammadaminml
        - link "LinkedIn" [ref=e565] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201
        - link "Telegram" [ref=e570] [cursor=pointer]:
          - /url: https://t.me/MohammadAminTech
  - button "باز کردن دستیار هوشمند" [ref=e575]:
    - generic [ref=e578]: سوال از AI
  - alert [ref=e579]
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test.describe("Portfolio Core Flows", () => {
  4  |   test("redirects root to /fa with RTL direction and SEO metadata", async ({ page }) => {
  5  |     await page.goto("/");
  6  |     await expect(page).toHaveURL(/\/fa$/);
  7  |     await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  8  |     await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  9  |     await expect(page.locator("h1")).toBeVisible();
  10 |   });
  11 | 
  12 |   test("switches language to English with LTR direction", async ({ page }) => {
  13 |     await page.goto("/fa");
> 14 |     await page.getByRole("link", { name: /EN/i }).click();
     |                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 |     await expect(page).toHaveURL(/\/en$/);
  16 |     await expect(page.locator("html")).toHaveAttribute("lang", "en");
  17 |     await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  18 |   });
  19 | 
  20 |   test("navigates to projects and opens a Case Study detail page", async ({ page }) => {
  21 |     await page.goto("/fa/projects");
  22 |     await expect(page.locator("h1")).toContainText("مسئله");
  23 | 
  24 |     await page.getByRole("link", { name: /مطالعه جزئیات پروژه/i }).first().click();
  25 |     await expect(page).toHaveURL(/\/fa\/projects\/.+/);
  26 |     await expect(page.getByRole("heading", { name: "چه چیزی باید حل می‌شد؟" })).toBeVisible();
  27 |   });
  28 | 
  29 |   test("opens the AI Assistant chat dialog", async ({ page }) => {
  30 |     await page.goto("/fa");
  31 |     await page.getByRole("button", { name: /باز کردن دستیار هوشمند/i }).click();
  32 |     await expect(page.getByRole("dialog")).toBeVisible();
  33 |   });
  34 | });
```