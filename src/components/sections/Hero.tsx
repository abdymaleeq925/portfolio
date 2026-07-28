import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";

import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { useScrollTo } from "../../hooks/useScrollTo";


export const Hero = () => {
  const { t, i18n } = useTranslation();
  const scrollTo = useScrollTo()
  const handleClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    scrollTo(id)
  }
  const currentLang = i18n.language || "en";
  const resumePath = `/Abdymalik_Batyrkulov_CV_${currentLang}.pdf`;
  const downloadFileName = `Abdymalik_Batyrkulov_CV_${currentLang}.pdf`;

  return (
    <section id="home" className="min-h-screen py-0 md:py-13 lg:py-0 flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black">
      <div className="text-center px-6 max-w-5xl">
        <Reveal as="p" viewport={false} y={24} delay={0.1} className="text-purple-400 text-lg mb-4">
          {t("hero.greeting")}
        </Reveal>

        <Reveal as="h1" viewport={false} y={24} delay={0.22} duration={0.6} className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          {t("hero.name")}
        </Reveal>

        <Reveal as="p" viewport={false} y={24} delay={0.34} className="text-2xl md:text-4xl text-gray-300 mb-8">
          {t("hero.role")}
        </Reveal>

        <Reveal as="p" viewport={false} y={24} delay={0.46} className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          {t("hero.description")}
        </Reveal>

        <Reveal as="div" viewport={false} y={24} delay={0.58} className="flex gap-4 justify-center flex-wrap">
          <Button href="#projects" onClick={handleClick("projects")}>{t("buttons.work")}</Button>
          <Button href="#contact" onClick={handleClick("contact")}>{t("buttons.contact")}</Button>
          <Button href={resumePath} download={downloadFileName}>{t("buttons.download")}</Button>
        </Reveal>
      </div>
      <Reveal
        as="a"
        viewport={false}
        y={0}
        delay={1}
        href="#about"
        onClick={handleClick("about")}
        className="absolute hidden md:block bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll down to the next section"
      >
        <ArrowDown className="animate-bounce" />
      </Reveal>
    </section>
  )
}