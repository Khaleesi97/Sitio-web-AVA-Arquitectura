import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Briefcase, Box } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reiniciar el índice de imagen al cambiar de proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!isOpen || !project) return null;

  // Las imágenes del proyecto: usa el array `images` si existe, si no la imagen principal
  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleClose = () => {
    setCurrentImageIndex(0);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between z-10">
            <div className="flex-1 pr-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {project.title}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        idx === currentImageIndex
                          ? "border-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Vista ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Descripción del Proyecto
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Alcances gráficos */}
            {project.alcancesGraficos && project.alcancesGraficos.length > 0 && (
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Alcances Gráficos
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.alcancesGraficos.map((alcance, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      {alcance}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detalles del proyecto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-secondary/5 rounded-xl border border-border">
              {project.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ubicación / Proyecto</p>
                    <p className="font-semibold text-foreground">{project.location}</p>
                  </div>
                </div>
              )}
              {project.tipoIntervencion && (
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tipo de Intervención</p>
                    <p className="font-semibold text-foreground">{project.tipoIntervencion}</p>
                  </div>
                </div>
              )}
              {project.software && project.software.length > 0 && (
                <div className="flex items-start gap-3 sm:col-span-2">
                  <Box className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Software</p>
                    <div className="flex flex-wrap gap-2">
                      {project.software.map((s, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navegación entre proyectos */}
            {(hasPrev || hasNext) && (
              <div className="flex gap-4 pt-4 border-t border-border">
                <button
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className="flex-1 py-3 px-4 bg-secondary/20 hover:bg-secondary/40 disabled:opacity-50 disabled:cursor-not-allowed text-foreground font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Anterior
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className="flex-1 py-3 px-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
