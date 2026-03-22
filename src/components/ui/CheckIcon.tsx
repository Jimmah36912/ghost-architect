interface CheckIconProps {
  className?: string
}

export function CheckIcon({ className = "" }: CheckIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.3" />
      <path
        d="M5.5 9L7.8 11.5L12.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
