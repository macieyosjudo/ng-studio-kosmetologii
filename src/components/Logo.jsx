export default function Logo({ className = '', dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img src="/logo-mark.png" alt="NG Studio Kosmetologii" className="h-9 w-auto" />
      <span className="leading-tight text-left">
        <span className={`block text-sm font-semibold tracking-wide font-display ${dark ? 'text-white' : 'text-plum'}`}>
          NG Studio
        </span>
        <span className="block text-[11px] tracking-widest uppercase text-rose-500">Kosmetologii</span>
      </span>
    </span>
  )
}
