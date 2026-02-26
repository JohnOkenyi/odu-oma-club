interface SectionBadgeProps {
  children: React.ReactNode
  icon?: string
}

export default function SectionBadge({ children, icon }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A04C]/20 text-[#D4A04C] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
      {icon && <span>{icon}</span>}
      {children}
    </div>
  )
}
