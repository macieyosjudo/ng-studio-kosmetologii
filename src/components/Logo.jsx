export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display select-none ${className}`}>
      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white text-sm font-semibold shadow-soft" aria-hidden="true">
        NG
      </span>
      <span className="leading-tight text-left">
        <span className="block text-sm font-semibold tracking-wide text-plum">NG Studio</span>
        <span className="block text-[11px] tracking-widest uppercase text-rose-500">Kosmetologii</span>
      </span>
    </span>
  )
}
