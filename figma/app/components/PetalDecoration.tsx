interface PetalDecorationProps {
  className?: string;
}

export function PetalDecoration({ className = "" }: PetalDecorationProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute opacity-20 ${className}`}
      fill="#E88AB5"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="50"
        transform="rotate(0 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="50"
        transform="rotate(60 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="50"
        transform="rotate(120 50 50)"
      />
    </svg>
  );
}
