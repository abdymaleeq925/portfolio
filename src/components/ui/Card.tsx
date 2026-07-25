import { ExternalLink } from "lucide-react"
import type { petProjectsProps } from "../../data/resume"

interface CardProps {
  project: petProjectsProps
}

export const Card = ({ project }: CardProps) => {
  return (
    <div className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
      <div className="relative h-80 overflow-hidden">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        src={project.img}
        alt={project.title}
        loading="lazy"
      />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <a 
            className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
            href={project.href}
            target="_blank"
          >
            <ExternalLink/>
          </a>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
        {
          project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">{tag}</span>
          ))
        }
        </div>
      </div>
    </div>
  )
}