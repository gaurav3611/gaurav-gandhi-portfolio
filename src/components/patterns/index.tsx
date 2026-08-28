export function SeigaihaPattern({
  className = "",
  color = "#1a1a1a",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden>
      <defs>
        <pattern
          id="seigaiha"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M12,0 C12,6 18,12 24,12 C18,12 12,18 12,24 C12,18 6,12 0,12 C6,12 12,6 12,0Z"
            fill="none"
            stroke={color}
            strokeWidth="0.6"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#seigaiha)" />
    </svg>
  );
}

export function AsanohaPattern({
  className = "",
  color = "#1a1a1a",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden>
      <defs>
        <pattern
          id="asanoha"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M12,0 L24,12 L12,24 L0,12 Z M12,0 L12,24 M0,12 L24,12"
            fill="none"
            stroke={color}
            strokeWidth="0.6"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#asanoha)" />
    </svg>
  );
}

export function ZenGardenPattern({
  className = "",
  color = "#1a1a1a",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden>
      <defs>
        <pattern
          id="zen"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            opacity="0.2"
          />
          <path
            d="M22,6 C28,10 28,34 22,38"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zen)" />
    </svg>
  );
}
