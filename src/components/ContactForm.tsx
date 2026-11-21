"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaTelegram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Locale } from "@/types/site";

interface ContactFormState {
  type: string;
  stage: string;
  budget: string;
  timeline: string;
  name: string;
  contact: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

interface ChoiceGroupProps {
  legend: string;
  name: keyof ContactFormState;
  items: string[];
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const INITIAL_FORM: ContactFormState = {
  type: "",
  stage: "",
  budget: "",
  timeline: "",
  name: "",
  contact: "",
  message: "",
};

const CONTACT_LINKS: { label: Record<Locale, string>; href: string; Icon: IconType; isEmail?: boolean }[] = [
  {
    label: { fa: "ایمیل", en: "Email" },
    href: "mailto:mohammadaminmollakazemiha@gmail.com",
    Icon: MdEmail,
    isEmail: true,
  },
  {
    label: { fa: "تلگرام", en: "Telegram" },
    href: "https://t.me/MohammadAminTech",
    Icon: FaTelegram,
  },
  {
    label: { fa: "لینکدین", en: "LinkedIn" },
    href: "https://www.linkedin.com/in/mohammad-amin-mollakazemiha-52a3a2201",
    Icon: FaLinkedin,
  },
  {
    label: { fa: "گیت‌هاب", en: "GitHub" },
    href: "https://github.com/Mohammadaminml",
    Icon: FaGithub,
  },
];

function ChoiceGroup({ legend, name, items, value, error, onChange }: ChoiceGroupProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-extrabold text-(--text)">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const selected = value === item;
          return (
            <label
              key={item}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-all ${
                selected
                  ? "border-(--accent) bg-(--accent-soft) text-(--accent)"
                  : "border-(--border) bg-(--bg) text-(--text) hover:border-(--accent)/50"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={item}
                checked={selected}
                onChange={onChange}
                className="sr-only"
              />
              <span>{item}</span>
              <FaCheck
                className={`h-3.5 w-3.5 shrink-0 transition-opacity ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
              />
            </label>
          );
        })}
      </div>
      {error && (
        <p className="text-xs font-semibold text-red-500" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const isFa = locale === "fa";
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const NextArrow = isFa ? FaArrowLeft : FaArrowRight;
  const PrevArrow = isFa ? FaArrowRight : FaArrowLeft;

  const formatNum = (n: number) =>
    isFa ? new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(n) : String(n);

  const projectTypes = isFa
    ? ["طراحی و توسعه محصول", "وب‌سایت یا فروشگاه", "بک‌اند و API", "هوش مصنوعی", "مشاوره فنی", "سایر"]
    : ["Product Design & Dev", "Website / E-Commerce", "Backend & API", "Applied AI", "Technical Consulting", "Other"];

  const projectStages = isFa
    ? ["فقط یک ایده دارم", "نیازها مشخص شده‌اند", "طراحی آماده است", "محصول موجود نیاز به توسعه دارد"]
    : ["Just an idea", "Requirements defined", "Design is ready", "Existing product needs scaling"];

  const budgets = isFa
    ? ["نیاز به برآورد دارم", "کمتر از ۵۰ میلیون", "۵۰ تا ۱۵۰ میلیون", "۱۵۰ تا ۳۰۰ میلیون", "بیشتر از ۳۰۰ میلیون"]
    : ["Need an estimate", "Under $1,500", "$1,500 – $5,000", "$5,000 – $10,000", "$10,000+"];

  const timelines = isFa
    ? ["هرچه زودتر", "۱ تا ۲ ماه آینده", "۳ تا ۶ ماه آینده", "زمان‌بندی منعطف است"]
    : ["ASAP", "1 – 2 months", "3 – 6 months", "Flexible timeline"];

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validateStep = () => {
    const nextErrors: FormErrors = {};
    if (step === 1) {
      if (!form.type) nextErrors.type = isFa ? "نوع همکاری را انتخاب کنید." : "Please select a collaboration type.";
      if (!form.stage) nextErrors.stage = isFa ? "وضعیت فعلی پروژه را مشخص کنید." : "Please select the current project stage.";
    }
    if (step === 2) {
      if (!form.budget) nextErrors.budget = isFa ? "یک بازه بودجه انتخاب کنید." : "Please select an estimated budget.";
      if (!form.timeline) nextErrors.timeline = isFa ? "زمان مورد انتظار را مشخص کنید." : "Please select an expected timeline.";
    }
    if (step === 3) {
      if (!form.name.trim()) nextErrors.name = isFa ? "نام شما برای شروع گفتگو لازم است." : "Your name is required.";
      if (!form.contact.trim()) nextErrors.contact = isFa ? "ایمیل یا شناسه تلگرام را وارد کنید." : "Please enter your email or Telegram handle.";
      if (form.message.trim().length < 20) {
        nextErrors.message = isFa
          ? "لطفاً مسئله یا هدف پروژه را کمی بیشتر توضیح دهید (حداقل ۲۰ کاراکتر)."
          : "Please describe your project goal in a bit more detail (at least 20 characters).";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((current) => Math.min(current + 1, 3));
  };

  const previous = () => {
    setErrors({});
    setStep((current) => Math.max(current - 1, 1));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
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
      setForm(INITIAL_FORM);
    } catch {
      setSubmitStatus("error");
    }
  };

  const emailFallback = `mailto:mohammadaminmollakazemiha@gmail.com?subject=${encodeURIComponent(
    `${isFa ? "درخواست همکاری" : "Project Inquiry"} — ${form.type || (isFa ? "پروژه جدید" : "New Project")}`
  )}`;

  return (
    <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
      {/* Sidebar */}
      <aside className="space-y-6 lg:sticky lg:top-28">
        <div className="sig-card flex items-start gap-3.5 p-5">
          <span className="status-dot mt-1.5 shrink-0" />
          <div>
            <strong className="block text-sm font-extrabold text-(--text)">
              {isFa ? "ظرفیت محدود برای همکاری جدید" : "Limited availability for new projects"}
            </strong>
            <p className="mt-1 text-xs text-(--text-muted)">
              {isFa ? "معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم." : "Usually replies within 24 hours."}
            </p>
          </div>
        </div>

        <div className="sig-card space-y-2 p-5">
          <p className="mb-3 text-xs font-extrabold text-(--text-muted)">
            {isFa ? "راه‌های ارتباط مستقیم" : "Direct Channels"}
          </p>
          {CONTACT_LINKS.map(({ label, href, Icon, isEmail }) => (
            <a
              key={href}
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-(--text) transition-colors hover:border-(--border) hover:bg-(--bg)"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-(--accent)" />
                <span>{label[locale]}</span>
              </span>
              <span aria-hidden="true" className="text-xs text-(--text-muted)">
                ↗
              </span>
            </a>
          ))}
        </div>

        <small className="flex items-start gap-2 text-xs leading-relaxed text-(--text-muted)">
          <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>
            {isFa
              ? "اطلاعات در دیتابیس سایت ذخیره نمی‌شود و فقط برای تحویل ایمیل ارسال خواهد شد."
              : "Your information is not stored in any database and is sent directly via email."}
          </span>
        </small>
      </aside>

      {/* 3-Step Form */}
      <form onSubmit={submit} noValidate className="sig-card space-y-8 p-6 sm:p-8">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-(--text-muted)">
            <span>
              {isFa ? `مرحله ${formatNum(step)} از ۳` : `Step ${step} of 3`}
            </span>
            <span>{Math.round((step / 3) * 100)}%</span>
          </div>
          <div
            role="progressbar"
            aria-label={isFa ? `پیشرفت فرم؛ مرحله ${formatNum(step)} از ۳` : `Form progress: step ${step} of 3`}
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={step}
            className="h-2 w-full overflow-hidden rounded-full bg-(--border)"
          >
            <div
              className="h-full rounded-full bg-(--accent) transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-(--accent)">01</span>
              <div>
                <h2 className="text-xl font-black">
                  {isFa ? "چه چیزی می‌خواهیم بسازیم؟" : "What are we building?"}
                </h2>
                <p className="mt-1 text-xs text-(--text-muted)">
                  {isFa
                    ? "نزدیک‌ترین گزینه را انتخاب کن؛ جزئیات را بعداً دقیق می‌کنیم."
                    : "Pick the closest option—we'll refine the details together."}
                </p>
              </div>
            </div>

            <ChoiceGroup
              legend={isFa ? "نوع همکاری" : "Collaboration Type"}
              name="type"
              items={projectTypes}
              value={form.type}
              error={errors.type}
              onChange={update}
            />
            <ChoiceGroup
              legend={isFa ? "وضعیت فعلی پروژه" : "Current Project Stage"}
              name="stage"
              items={projectStages}
              value={form.stage}
              error={errors.stage}
              onChange={update}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-(--accent)">02</span>
              <div>
                <h2 className="text-xl font-black">
                  {isFa ? "محدوده اجرا چطور است؟" : "Scope & Timeline"}
                </h2>
                <p className="mt-1 text-xs text-(--text-muted)">
                  {isFa
                    ? "این اطلاعات برای پیشنهاد یک مسیر واقع‌بینانه استفاده می‌شود."
                    : "Helps me propose a realistic architecture and delivery plan."}
                </p>
              </div>
            </div>

            <ChoiceGroup
              legend={isFa ? "بازه تقریبی بودجه" : "Estimated Budget"}
              name="budget"
              items={budgets}
              value={form.budget}
              error={errors.budget}
              onChange={update}
            />
            <ChoiceGroup
              legend={isFa ? "زمان مورد انتظار" : "Expected Timeline"}
              name="timeline"
              items={timelines}
              value={form.timeline}
              error={errors.timeline}
              onChange={update}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-(--accent)">03</span>
              <div>
                <h2 className="text-xl font-black">
                  {isFa ? "کمی بیشتر از پروژه بگو." : "Tell me about the project."}
                </h2>
                <p className="mt-1 text-xs text-(--text-muted)">
                  {isFa
                    ? "اطلاعات تماس و مهم‌ترین مسئله‌ای که می‌خواهی حل شود."
                    : "Your contact details and the core problem you want to solve."}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm font-semibold">
                <span>{isFa ? "نام شما" : "Your Name"}</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  placeholder={isFa ? "نام و نام خانوادگی" : "Full name"}
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded-xl border border-(--border) bg-(--bg) px-4 py-3 text-sm outline-none focus:border-(--accent)"
                />
                {errors.name && (
                  <span className="block text-xs text-red-500" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="space-y-1.5 text-sm font-semibold">
                <span>{isFa ? "ایمیل یا شناسه تلگرام" : "Email or Telegram"}</span>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={update}
                  autoComplete="email"
                  placeholder={isFa ? "name@example.com یا @username" : "name@example.com or @username"}
                  dir="ltr"
                  aria-invalid={Boolean(errors.contact)}
                  className="w-full rounded-xl border border-(--border) bg-(--bg) px-4 py-3 text-sm outline-none focus:border-(--accent)"
                />
                {errors.contact && (
                  <span className="block text-xs text-red-500" role="alert">
                    {errors.contact}
                  </span>
                )}
              </label>

              <label className="space-y-1.5 text-sm font-semibold sm:col-span-2">
                <span>{isFa ? "توضیحات پروژه" : "Project Description"}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={5}
                  placeholder={
                    isFa
                      ? "مسئله، هدف و انتظاری که از نتیجه پروژه دارید..."
                      : "The problem, goals, and what success looks like..."
                  }
                  aria-invalid={Boolean(errors.message)}
                  className="w-full rounded-xl border border-(--border) bg-(--bg) px-4 py-3 text-sm outline-none focus:border-(--accent)"
                />
                {errors.message && (
                  <span className="block text-xs text-red-500" role="alert">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 border-t border-(--border) pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={previous}
              className="inline-flex items-center gap-2 rounded-full border border-(--border) px-5 py-2.5 text-sm font-bold text-(--text) transition-colors hover:bg-(--bg)"
            >
              <PrevArrow className="h-3.5 w-3.5" />
              <span>{isFa ? "مرحله قبل" : "Back"}</span>
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-(--navy) px-6 py-3 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5 dark:bg-(--accent)"
            >
              <span>{isFa ? "ادامه" : "Continue"}</span>
              <NextArrow className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitStatus === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <FaPaperPlane className="h-3.5 w-3.5" />
              <span>
                {submitStatus === "sending"
                  ? isFa
                    ? "در حال ارسال..."
                    : "Sending..."
                  : isFa
                    ? "ارسال درخواست"
                    : "Send Inquiry"}
              </span>
            </button>
          )}
        </div>

        {/* Feedback */}
        <div aria-live="polite">
          {submitStatus === "success" && (
            <p
              role="status"
              className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-700 dark:text-emerald-300"
            >
              <FaCheck className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <strong>{isFa ? "درخواستت ارسال شد. " : "Inquiry sent. "}</strong>
                {isFa
                  ? "پس از بررسی، از راه ارتباطی ثبت‌شده پاسخ می‌دهم."
                  : "I'll review your message and get back to you shortly."}
              </span>
            </p>
          )}

          {submitStatus === "error" && (
            <div
              role="alert"
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-600 dark:text-red-300"
            >
              <span>
                <strong>{isFa ? "ارسال خودکار انجام نشد. " : "Submission failed. "}</strong>
                {isFa
                  ? "اتصال اینترنت را بررسی کن یا از ایمیل مستقیم استفاده کن."
                  : "Check your connection or send an email directly."}
              </span>
              <a
                href={emailFallback}
                className="font-extrabold underline underline-offset-4"
              >
                {isFa ? "ارسال با برنامه ایمیل" : "Open Email Client"}
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}