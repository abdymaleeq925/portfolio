import { useTranslation } from "react-i18next"

import { Reveal } from "../ui/Reveal"
import { experience } from "../../data/resume"
import { Card } from "../ui/Card"

export const Experience = () => {
  const { t } = useTranslation();
  const translations = t("experience.items", { returnObjects: true }) as { period: string; position: string; companyName: string; achievements?:string[]}[];
  const experienceList = experience.map((item, index) => ({
    ...item,
    ...translations?.[index] ?? {},
  }))

  return (
    <section id="experience" className="min-h-screen bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal as="h2" className="text-5xl md:text-6xl font-bold mb-6 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t("experience.title")}
        </Reveal>
        <Reveal as="p" className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          {t("experience.description")}
        </Reveal>
        <ol className="relative space-y-12">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500 via-blue-500 to-purple-500" />
          {experienceList.map((item, index) => (
            <li key={item.id}>
              <Card cardData={item} isProject={false} index={index} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}