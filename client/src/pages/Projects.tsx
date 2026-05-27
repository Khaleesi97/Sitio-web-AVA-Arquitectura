import { useState, useMemo } from "react";
import FadeInUp from "../components/FadeInUp";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, categories, Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "Todos"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // La navegación anterior/siguiente respeta el filtro activo
  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;
  const hasNext = currentIndex >= 0 && currentIndex < filteredProjects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNextProject = () => {
    if (hasNext) setSelectedProject(filteredProjects[currentIndex + 1]);
  };
  const handlePrevProject = () => {
    if (hasPrev) setSelectedProject(filteredProjects[currentIndex - 1]);
  };

  const totalProjects = projects.length;
  const totalCategories = categories.length - 1; // excluye "Todos"

  return (
    <div className="py-20 bg-background min-h-screen pt-32">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Portafolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos reales en diseño y visualización
            arquitectónica. Cada ficha integra render, descripción, alcances
            gráficos y software empleado.
          </p>
        </div>

        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/15 text-foreground hover:bg-secondary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeInUp key={project.id} delay={(idx % 3) * 0.08}>
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </FadeInUp>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 pt-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeInUp>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">
                  {totalProjects}+
                </p>
                <p className="text-muted-foreground">Proyectos Realizados</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">
                  {totalCategories}
                </p>
                <p className="text-muted-foreground">Áreas de Especialidad</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">2</p>
                <p className="text-muted-foreground">Estados: Michoacán y Oaxaca</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
}
