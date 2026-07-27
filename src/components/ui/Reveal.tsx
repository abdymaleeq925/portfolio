import type { ReactNode, ElementType } from "react"
import { motion } from "framer-motion"

interface RevealProps {
  children?: ReactNode
  as?: ElementType
  delay?: number
  duration?: number
  y?: number
  x?: number
  scale?: number
  viewport?: boolean
  once?: boolean
  className?: string
  [key: string]: unknown
}

export const Reveal = ({
  children,
  as = "div",
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  scale = 1,
  viewport = true,
  once = true,
  className,
  ...rest
}: RevealProps) => {
  const Component = motion[as as keyof typeof motion] as typeof motion.div

  const trigger = viewport
    ? { whileInView: { opacity: 1, y: 0, x: 0, scale: 1 }, viewport: { once, amount: 0.4 } }
    : { animate: { opacity: 1, y: 0, x: 0, scale: 1 } }

  return (
    <Component
      initial={{ opacity: 0, y, x, scale }}
      {...trigger}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}