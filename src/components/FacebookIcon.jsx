export default function FacebookIcon({ size = 18, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 8.5h2.5V5.5h-2.5c-1.93 0-3.5 1.57-3.5 3.5v2.5H8v3h2.5V21h3v-6.5H16l1-3h-3.5V9c0-.28.22-.5.5-.5z" />
    </svg>
  )
}
