export function BrandLogo({ footer = false, onClick }) {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo/icarus-cog.png`;

  return (
    <a
      className={footer ? 'brand brand--footer' : 'brand'}
      href="/"
      aria-label="Icarus International home"
      onClick={onClick}
    >
      <img className="brand__mark" src={logoSrc} alt="" aria-hidden="true" />
      <span>
        <strong>Icarus</strong>
        <em>International</em>
      </span>
    </a>
  );
}
