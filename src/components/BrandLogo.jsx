export function BrandLogo({ footer = false, onClick }) {
  return (
    <a
      className={footer ? 'brand brand--footer' : 'brand'}
      href="/"
      aria-label="Icarus International home"
      onClick={onClick}
    >
      <span className="brand__mark" aria-hidden="true" />
      <span>
        <strong>Icarus</strong>
        <em>International</em>
      </span>
    </a>
  );
}
