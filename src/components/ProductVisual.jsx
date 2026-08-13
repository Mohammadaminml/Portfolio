export default function ProductVisual({ product, compact = false }) {
  return (
    <div className={`product-visual product-visual-${product.accent} ${compact ? "product-visual-compact" : ""}`} aria-hidden="true">
      <span className="product-visual-label">{product.category}</span>
      <div className="product-window">
        <span /><span /><span />
        <div className="product-window-lines"><i /><i /><i /></div>
      </div>
      <strong dir="auto"><bdi>{product.title}</bdi></strong>
    </div>
  );
}
