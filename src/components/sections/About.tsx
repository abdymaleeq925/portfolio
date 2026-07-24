import aboutMeImage from "../../assets/about-me.png"
import { getIconUrl, techStack } from "../../data/resume"

export const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            className="rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.5)] w-full h-125 object-cover"
            alt="about-me"
            src={aboutMeImage}
            loading="lazy"
          />
          <div className="space-y-6">
            <article className="text-gray-300 text-xl">
              Frontend Developer with 2+ years of commercial experience in architecting scalable web applications and micro-frontend ecosystems using React, Next.js, and TypeScript. Proven track record of boosting UI performance by 15% and streamlining cross-platform authorization. Expert in global state management (Zustand, Redux) and building accessible, secure, user-centric interfaces. Fluent in English (C1) and Russian, driving results in fast-paced cross-functional Agile teams.
            </article>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((icon) => (
                  <div key={icon.slug} className="group relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/25 shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50">
                      <img
                        src={getIconUrl(icon)}
                        alt={icon.name}
                        width={32}
                        height={32}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>

                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}