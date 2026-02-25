interface WavyDividerProps {
  color?: string;
  flip?: boolean;
}

export function WavyDivider({ color = "#0F2044", flip = false }: WavyDividerProps) {
  return (
    <div className={`w-full ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <path
          d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
