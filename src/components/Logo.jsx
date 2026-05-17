import logoUrl from '../assets/logo.png';

export function Logo({ size = 32, className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="elictive"
      className={`logo-mark ${className}`}
      width={size}
      height={size}
    />
  );
}

export function HexOutline({ stroke = 1.25 }) {
  return (
    <svg viewBox="0 0 200 200">
      <polygon
        className="out"
        style={{ strokeWidth: stroke }}
        points="100,8 174,50 174,150 100,192 26,150 26,50"
      />
    </svg>
  );
}
