import { ArrowDown } from "lucide-react"
import { Button } from "../ui/Button"
import { useScrollTo } from "../../hooks/useScrollTo"


export const Hero = () => {
  const scrollTo = useScrollTo();
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black">
      <div className="text-center px-6 max-w-5xl">
        <p className="text-purple-400 text-lg mb-4">Hello I'm</p>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Abdymalik Batyrkulov
        </h1>
        <p className="text-2xl md:text-4xl text-gray-300 mb-8">
          Frontend Developer with 2+ years experience
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Building high-performance, responsive web applications with a focus on polished UI/UX and clean architecture. Passionate about turning complex ideas into seamless digital experiences through modern React and Next.js ecosystem.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#projects" onClick={handleClick("projects")}>View My Work</Button>
          <Button href="#contact" onClick={handleClick("contact")}>Get In Touch</Button>
        </div>
      </div>
      <a
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down to the next section"
        onClick={handleClick("about")}
      >
        <ArrowDown className="animate-bounce"/>
      </a>
    </section>
  )
}