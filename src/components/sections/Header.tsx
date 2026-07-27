import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, X } from "lucide-react";

import { useScrollTo } from "../../hooks/useScrollTo";
import { useClickOutside } from "../../hooks/useClickOutside";
import { navLinks } from "../../data/resume";
import { useLenis } from "lenis/react";


export const Header = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleOnToggleMenu = (): void => { setIsOpen((current) => !current) };
  const handleOnClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    lenis?.start();
    scrollTo(id);
    setIsOpen(false);
  };

  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  const scrollTo = useScrollTo();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      lenis?.stop()
    } else {
      document.body.style.overflow = ""
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, lenis])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 
      ${isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`} ref={menuRef}>
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-50">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home") }} className="text-xl font-bold text-white">AB</a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={id}
                onClick={handleOnClick(id)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white"
          onClick={handleOnToggleMenu}
          aria-label="Open Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map(({ id, label }, index) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={handleOnClick(id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  )
}