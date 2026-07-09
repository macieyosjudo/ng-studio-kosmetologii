export default function HeroArt() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label="Ilustracja: delikatny kwiat i linie symbolizujące pielęgnację urody">
      <defs>
        <linearGradient id="petal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="petal2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCE7F3" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="#FCE7F3" opacity="0.6" />
      <circle cx="200" cy="200" r="120" fill="#FDF2F8" opacity="0.8" />
      <g transform="translate(200,200)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-58"
            rx="26"
            ry="60"
            fill={deg % 120 === 0 ? 'url(#petal)' : 'url(#petal2)'}
            opacity="0.92"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="26" fill="#831843" />
        <circle r="10" fill="#FDF2F8" />
      </g>
      <g stroke="#F472B6" strokeWidth="1.5" opacity="0.5" fill="none">
        <path d="M40 340 Q120 300 200 340 T360 330" />
        <path d="M30 60 Q110 100 190 60 T350 70" />
      </g>
    </svg>
  )
}
