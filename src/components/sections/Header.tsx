import { HamburgerIcon } from "lucide-react"
import { useState } from "react"
import { useScrollTo } from "../../hooks/useScrollTo";

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnToggleMenu = (): void => { setIsOpen((current) => !current) }

  const scrollTo = useScrollTo();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home") }} className="text-xl font-bold text-white">AB</a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
      </ul>
      <button className="md:hidden text-white" onClick={handleOnToggleMenu} aria-label="Open Menu" aria-expanded={isOpen}><HamburgerIcon /></button>
    </nav>
    </header >
  )
}