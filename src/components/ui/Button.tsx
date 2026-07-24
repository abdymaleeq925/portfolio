interface ButtonProps {
  children: React.ReactNode,
  href?: string,
  onClick?: (e: React.MouseEvent) => void
}
export const Button = ({children, href, onClick}: ButtonProps) => {
  const className = "px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer inline-block"

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  )
}