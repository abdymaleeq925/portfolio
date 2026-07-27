import { useTranslation } from "react-i18next"

import { Reveal } from "../ui/Reveal";
import { contacts } from "../../data/resume";
import { Button } from "../ui/Button";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="min-h-screen bg-linear-to-b from-gray-900 to-black py-20 px-6 flex items-center text-center">
      <div className="max-w-4xl mx-auto w-full">
        <Reveal as="h2" className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t("contact.title")}
        </Reveal>

        <Reveal as="p" className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </Reveal>

        <div className="bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 mb-12">
          <Reveal as="h3" className="text-3xl font-bold text-white mb-6">
            {t("contact.getInTouch")}
          </Reveal>

          <ul className="flex flex-wrap gap-6 justify-center mb-8">
            {contacts.map((contact) => (
              <li key={contact.title}>
                <Reveal
                  as="a"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.title}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all hover:text-purple-400"
                >
                  <contact.icon className="w-8 h-8" />
                  <span className="text-sm text-gray-400">{contact.title}</span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal
            as="div"
            delay={0.2}
            className="inline-block"
          >
            <Button href="mailto:abdymalikbatyrkulov@gmail.com">{t("contact.sendEmail")}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}