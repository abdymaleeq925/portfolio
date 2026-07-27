import { motion } from "framer-motion"
import { Briefcase, ExternalLink } from "lucide-react"
import type { ExperienceProps, PetProjectsProps } from "../../data/resume"

type CardProps =
  | { cardData: PetProjectsProps; isProject: true }
  | { cardData: ExperienceProps; isProject: false; index: number }

export const Card = (props: CardProps) => {
  if (props.isProject) {
    const { cardData } = props;
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
      >
        <div className="relative h-80 overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={cardData.img}
            alt={cardData.title}
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-white">{cardData.title}</h3>
            <a
              className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
              href={cardData.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
            </a>
          </div>
          <p className="text-gray-400 mb-4">{cardData.description}</p>
          <div className="flex flex-wrap gap-2">
            {cardData.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  const { cardData, index } = props
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center"
    >
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black -translate-x-1/2 z-10" />
      <div
        className={`w-full md:w-5/12 ml-16 md:ml-0 ${
          isEven ? "md:mr-auto lg:pr-12" : "md:ml-auto lg:pr-12"
        }`}
      >
        <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">{cardData.period}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{cardData.position}</h3>
          <p className="text-purple-400 mb-4">{cardData.companyName}</p>
          <ul className="space-y-2">
            {(cardData.achievements ?? []).map((achievement, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm">
                <span className="text-purple-400 shrink-0">—</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}