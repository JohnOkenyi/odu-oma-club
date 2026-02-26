import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-base'
  
  const variants = {
    primary: 'bg-[#D4A04C] text-white hover:bg-[#E5B15D] shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10'
  }

  const combinedClassName = `  `

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        <ArrowRight className="w-5 h-5" />
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}
