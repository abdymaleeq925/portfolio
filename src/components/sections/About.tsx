import { useTranslation } from "react-i18next";

import { Reveal } from "../ui/Reveal";
import { getIconUrl, techStack } from "../../data/resume";
import aboutMeImage from "../../assets/about-me.png";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal as="h2" className="text-5xl md:text-6xl font-bold mb-16 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t("about.title")}
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal
            as="img"
            x={-60}
            y={0}
            duration={0.7}
            src={aboutMeImage}
            alt="about-me"
            loading="lazy"
            className="rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.5)] w-full h-125 object-cover"
          />

          <div className="space-y-6">
            <Reveal as="p" x={60} y={0} duration={0.7} delay={0.15} className="text-gray-300 text-xl">
              {t("about.description")}
            </Reveal>

            <div className="space-y-4">
              <Reveal as="h3" x={60} y={0} delay={0.2} className="text-2xl font-bold text-white mb-4">
                {t("about.techStack")}
              </Reveal>

              <ul className="flex flex-wrap gap-2">
                {techStack.map((icon, index) => (
                  <Reveal
                    as="li"
                    key={icon.slug}
                    y={0}
                    scale={0.6}
                    duration={0.35}
                    delay={index * 0.05}
                    className="group relative"
                  >
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
                    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                      {icon.name}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}