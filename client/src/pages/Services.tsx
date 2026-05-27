import FadeInUp from "../components/FadeInUp";
import { Link } from "wouter";

const R = "/renders/servicios";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Diseño Arquitectónico",
    description:
      "Creamos espacios y diseñamos experiencias. Proyecto arquitectónico integral desde la conceptualización hasta la planimetría ejecutiva.",
    image: `${R}/AVA_V2_diseno.png`,
  },
  {
    title: "Renderización 3D",
    description:
      "Visualizamos tus ideas con realismo y precisión. Renders fotorrealistas que comunican tu proyecto antes de construirlo.",
    image: `${R}/AVA_V2_renders.png`,
  },
  {
    title: "Interiorismo",
    description:
      "Diseño interior con selección de materiales, mobiliario y ambientación para espacios que transmiten carácter y confort.",
    image: `${R}/AVA_V2_interiorismo.png`,
  },
  {
    title: "Cuantificación de Obra",
    description:
      "Medición precisa para presupuestos confiables. Cálculo detallado de materiales y cantidades con exactitud y profesionalismo.",
    image: `${R}/AVA_V2_cuantificacion.png`,
  },
  {
    title: "Catálogos de Conceptos",
    description:
      "Organización, precisión y control en cada partida de tu proyecto. Estructura clara y detallada de cada etapa constructiva.",
    image: `${R}/AVA_V2_catalogos.png`,
  },
  {
    title: "Presupuestos y Precios Unitarios",
    description:
      "Presupuestos organizados, detallados y profesionales. Estimaciones reales y bien fundamentadas para decisiones inteligentes.",
    image: `${R}/AVA_V2_presupuestos.png`,
  },
  {
    title: "Apoyo en Licitaciones",
    description:
      "Experiencia, precisión y resultados. Elaboración y armado de propuestas para concursos públicos y privados, con documentación técnica completa.",
    image: `${R}/AVA_V2_licitaciones.png`,
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 bg-background min-h-screen pt-32">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales que abarcan desde la concepción visual hasta la
            gestión técnica, presupuestaria y de licitaciones.
          </p>
        </div>

        {/* Grid de servicios con gráficos de marca */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeInUp key={idx} delay={(idx % 3) * 0.1}>
              <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA al final */}
        <FadeInUp delay={0.2}>
          <div className="mt-20 text-center bg-secondary/10 rounded-2xl p-12 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Trabajamos por proyecto, sin necesidad de contratación de planta.
              Cuéntanos qué necesitas y con gusto te apoyamos.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:bg-primary/90 transition-all shadow-lg"
            >
              Contáctanos
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
