import { ProductAccent, ProductItem } from "@/data/products";

const VISUAL_GRADIENTS: Record<ProductAccent, string> = {
  blue: "from-[#164db3] to-[#75a5f7]",
  mint: "from-[#086b64] to-[#66c8ac]",
  violet: "from-[#6332a3] to-[#bd8bec]",
  coral: "from-[#a93628] to-[#f18b72]",
  amber: "from-[#a85b08] to-[#f2b84b]",
  slate: "from-[#172b4d] to-[#60789e]",
};

export function ProductVisual({
  product,
  compact = false,
}: {
  product: ProductItem;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col justify-end overflow-hidden bg-gradient-to-br text-white isolate ${VISUAL_GRADIENTS[product.accent]} ${
        compact ? "min-h-56 p-5" : "min-h-80 rounded-[32px] p-8"
      }`}
    >
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -end-16 -z-10 h-64 w-64 rounded-full border border-white/25 shadow-[0_0_0_2.5rem_rgba(255,255,255,0.04),0_0_0_5rem_rgba(255,255,255,0.03)]"
      />

      {/* Category Pill */}
      <span className="absolute top-4 start-4 z-10 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-bold backdrop-blur-md">
        {product.category}
      </span>

      {/* Floating Glass Window Mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute end-[8%] top-[22%] h-[44%] w-[52%] rotate-3 rounded-xl border border-white/35 bg-white/15 p-3 shadow-xl backdrop-blur-sm rtl:-rotate-3"
      >
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        </div>
        <div className="mt-3 grid gap-2">
          <i className="block h-1.5 rounded-full bg-white/45" />
          <i className="block h-1.5 w-[70%] rounded-full bg-white/45" />
          <i className="block h-1.5 w-[85%] rounded-full bg-white/45" />
        </div>
      </div>

      {/* Title */}
      <strong
        className={`relative z-10 max-w-[80%] font-extrabold leading-snug drop-shadow-sm ${
          compact ? "text-lg" : "text-3xl sm:text-4xl"
        }`}
      >
        {product.title}
      </strong>
    </div>
  );
}