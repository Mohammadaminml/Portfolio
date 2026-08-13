import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCheck, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { fadeUp } from "../animations/motion";

const contactLinks = [
  ["ایمیل", "mailto:mohammadaminmollakazemiha@gmail.com", MdEmail],
  ["Telegram", "https://t.me/MohammadAminTech", FaTelegram],
  ["LinkedIn", "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201", FaLinkedin],
  ["GitHub", "https://github.com/Mohammadaminml", FaGithub],
  ["Instagram", "https://www.instagram.com/mohammadamin_tech", FaInstagram],
];

const projectTypes = ["طراحی و توسعه محصول", "وب‌سایت یا فروشگاه", "بک‌اند و API", "هوش مصنوعی", "مشاوره فنی", "سایر"];
const projectStages = ["فقط یک ایده دارم", "نیازها مشخص شده‌اند", "طراحی آماده است", "محصول موجود نیاز به توسعه دارد"];
const budgets = ["نیاز به برآورد دارم", "کمتر از ۵۰ میلیون", "۵۰ تا ۱۵۰ میلیون", "۱۵۰ تا ۳۰۰ میلیون", "بیشتر از ۳۰۰ میلیون"];
const timelines = ["هرچه زودتر", "۱ تا ۲ ماه آینده", "۳ تا ۶ ماه آینده", "زمان‌بندی منعطف است"];

const initialForm = { type: "", stage: "", budget: "", timeline: "", name: "", contact: "", message: "" };
const toPersianNumber = (value) => new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(value);

export default function Contact() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");

  const update = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validateStep = () => {
    const nextErrors = {};
    if (step === 1 && !form.type) nextErrors.type = "نوع همکاری را انتخاب کنید.";
    if (step === 1 && !form.stage) nextErrors.stage = "وضعیت فعلی پروژه را مشخص کنید.";
    if (step === 2 && !form.budget) nextErrors.budget = "یک بازه بودجه انتخاب کنید.";
    if (step === 2 && !form.timeline) nextErrors.timeline = "زمان مورد انتظار را مشخص کنید.";
    if (step === 3 && !form.name.trim()) nextErrors.name = "نام شما برای شروع گفتگو لازم است.";
    if (step === 3 && !form.contact.trim()) nextErrors.contact = "ایمیل یا شناسه تلگرام را وارد کنید.";
    if (step === 3 && form.message.trim().length < 20) nextErrors.message = "لطفاً مسئله یا هدف پروژه را کمی بیشتر توضیح دهید.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => { if (validateStep()) setStep((current) => Math.min(current + 1, 3)); };
  const previous = () => { setErrors({}); setStep((current) => Math.max(current - 1, 1)); };

  const submit = async (event) => {
    event.preventDefault();
    if (!validateStep()) return;
    setSubmitStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/mohammadaminmollakazemiha@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `درخواست همکاری جدید — ${form.type}`,
          _template: "table",
          _captcha: "false",
          نام: form.name,
          "راه ارتباطی": form.contact,
          "نوع پروژه": form.type,
          "وضعیت فعلی": form.stage,
          بودجه: form.budget,
          "زمان‌بندی": form.timeline,
          "توضیحات پروژه": form.message,
        }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setSubmitStatus("success");
      setForm(initialForm);
    } catch {
      setSubmitStatus("error");
    }
  };

  const emailFallback = `mailto:mohammadaminmollakazemiha@gmail.com?subject=${encodeURIComponent(`درخواست همکاری — ${form.type || "پروژه جدید"}`)}`;

  const ChoiceGroup = ({ legend, name, items, error }) => (
    <fieldset className="inquiry-fieldset">
      <legend>{legend}</legend>
      <div className="inquiry-choices">
        {items.map((item) => <label key={item} className={form[name] === item ? "selected" : ""}><input type="radio" name={name} value={item} checked={form[name] === item} onChange={update} /><span>{item}</span><FaCheck /></label>)}
      </div>
      {error && <p className="field-error" role="alert">{error}</p>}
    </fieldset>
  );

  return (
    <section id="contact" className="contact-page py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.header variants={fadeUp} initial="hidden" animate="visible" className="contact-header">
          <p className="section-kicker">شروع یک همکاری</p>
          <h1>از مسئله‌ات بگو؛<br /><em>راه ساختنش را پیدا می‌کنیم.</em></h1>
          <p>چند سؤال کوتاه کمک می‌کند پیش از اولین گفتگو، تصویر روشن‌تری از پروژه داشته باشم.</p>
        </motion.header>

        <div className="contact-layout">
          <aside className="contact-aside">
            <div className="contact-availability"><span className="status-dot" /><div><strong>ظرفیت محدود برای همکاری جدید</strong><p>معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم.</p></div></div>
            <div className="contact-direct"><p>راه‌های ارتباط مستقیم</p>{contactLinks.map(([label, href, Icon]) => <a key={label} href={href} target={label === "ایمیل" ? undefined : "_blank"} rel={label === "ایمیل" ? undefined : "noreferrer"}><span><Icon /></span>{label}<b aria-hidden="true">↗</b></a>)}</div>
            <small><FaCheck /> اطلاعات در دیتابیس سایت ذخیره نمی‌شود و فقط برای تحویل ایمیل ارسال خواهد شد.</small>
          </aside>

          <form className="inquiry-form" onSubmit={submit} noValidate>
            <div className="inquiry-progress"><div role="progressbar" aria-label={`پیشرفت فرم؛ مرحله ${toPersianNumber(step)} از ۳`} aria-valuemin="1" aria-valuemax="3" aria-valuenow={step}><span style={{ width: `${step / 3 * 100}%` }} /></div><p aria-hidden="true">مرحله {toPersianNumber(step)} از ۳</p></div>

            {step === 1 && <div className="inquiry-step"><div className="inquiry-step-head"><span>۰۱</span><div><h2>چه چیزی می‌خواهیم بسازیم؟</h2><p>نزدیک‌ترین گزینه را انتخاب کن؛ جزئیات را بعداً دقیق می‌کنیم.</p></div></div><ChoiceGroup legend="نوع همکاری" name="type" items={projectTypes} error={errors.type} /><ChoiceGroup legend="وضعیت فعلی پروژه" name="stage" items={projectStages} error={errors.stage} /></div>}

            {step === 2 && <div className="inquiry-step"><div className="inquiry-step-head"><span>۰۲</span><div><h2>محدوده اجرا چطور است؟</h2><p>این اطلاعات برای پیشنهاد یک مسیر واقع‌بینانه استفاده می‌شود.</p></div></div><ChoiceGroup legend="بازه تقریبی بودجه" name="budget" items={budgets} error={errors.budget} /><ChoiceGroup legend="زمان مورد انتظار" name="timeline" items={timelines} error={errors.timeline} /></div>}

            {step === 3 && <div className="inquiry-step"><div className="inquiry-step-head"><span>۰۳</span><div><h2>کمی بیشتر از پروژه بگو.</h2><p>اطلاعات تماس و مهم‌ترین مسئله‌ای که می‌خواهی حل شود.</p></div></div><div className="inquiry-fields"><label>نام شما<input name="name" value={form.name} onChange={update} autoComplete="name" placeholder="نام و نام خانوادگی" aria-invalid={Boolean(errors.name)} />{errors.name && <span className="field-error" role="alert">{errors.name}</span>}</label><label>ایمیل یا شناسه تلگرام<input name="contact" value={form.contact} onChange={update} autoComplete="email" placeholder="name@example.com یا @username" dir="ltr" aria-invalid={Boolean(errors.contact)} />{errors.contact && <span className="field-error" role="alert">{errors.contact}</span>}</label><label className="full">توضیحات پروژه<textarea name="message" value={form.message} onChange={update} rows="6" placeholder="مسئله، هدف و انتظاری که از نتیجه پروژه دارید..." aria-invalid={Boolean(errors.message)} />{errors.message && <span className="field-error" role="alert">{errors.message}</span>}</label></div></div>}

            <div className="inquiry-actions">
              {step > 1 && <button type="button" className="inquiry-back" onClick={previous}><FaArrowRight /> مرحله قبل</button>}
              {step < 3 ? <button type="button" className="inquiry-next" onClick={next}>ادامه <FaArrowLeft /></button> : <button type="submit" className="inquiry-next" disabled={submitStatus === "sending"}><FaPaperPlane /> {submitStatus === "sending" ? "در حال ارسال..." : "ارسال درخواست"}</button>}
            </div>
            <div className="submit-feedback" aria-live="polite">
              {submitStatus === "success" && <p className="submit-success" role="status"><FaCheck /><span><strong>درخواستت ارسال شد.</strong> پس از بررسی، از راه ارتباطی ثبت‌شده پاسخ می‌دهم. اگر این اولین ارسال سایت است، لینک فعال‌سازی ارسال‌شده به ایمیل مدیر سایت باید یک‌بار تأیید شود.</span></p>}
              {submitStatus === "error" && <p className="submit-error" role="alert"><span><strong>ارسال خودکار انجام نشد.</strong> اتصال اینترنت را بررسی کن یا از گزینه ایمیل مستقیم استفاده کن.</span><a href={emailFallback}>ارسال با برنامه ایمیل</a></p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
