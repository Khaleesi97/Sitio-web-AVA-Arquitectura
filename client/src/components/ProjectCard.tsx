import { Project } from "@/data/projects";
import { MapPin, Briefcase, FileText, Images } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageCount = project.images?.length ?? 1;

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer text-left w-full hover:shadow-2xl transition-all duration-300 bg-card flex flex-col"
    >
      {/* Imagen */}
      <div className="relative overflow-hidden h-64 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Categoría flotante */}
        <span className="absolute top-3 left-3 bg-black/55 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
          {project.category}
        </span>

        {/* Indicador de varias imágenes */}
        {imageCount > 1 && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
            <Images className="w-3 h-3" />
            {imageCount}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Información detallada */}
        <div className="space-y-3 border-t border-border pt-4">
          {project.location && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{project.location}</span>
            </div>
          )}

          {project.tipoIntervencion && (
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">
                {project.tipoIntervencion}
              </span>
            </div>
          )}

          {project.alcancesGraficos && project.alcancesGraficos.length > 0 && (
            <div className="flex items-start gap-2 text-sm">
              <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-1">
                {project.alcancesGraficos.map((alcance, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                  >
                    {alcance}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
