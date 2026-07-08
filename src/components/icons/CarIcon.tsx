export function CarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17h14l1.5-5H3.5l1.5 5z" />
      <path d="M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2" />
      <path d="M16 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2" />
      <path d="M3 12l2-7h14l2 7" />
      <path d="M8 8h8" />
    </svg>
  );
}