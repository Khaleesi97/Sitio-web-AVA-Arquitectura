export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  images?: string[];
  software?: string[];
  alcancesGraficos?: string[];
  location?: string;
  tipoIntervencion?: string;
  fullDescription?: string;
}

export type ProjectCategory =
  | "Arquitectura Hospitalaria"
  | "Diseño Residencial"
  | "Comercial & Hospitalidad"
  | "Patrimonio & Espacio Comercial"
  | "Arquitectura para Eventos";

const R = "/renders";

// ============================================================
// ARQUITECTURA HOSPITALARIA
// Hospital Materno Fetal con Ala Pediátrica — Pátzcuaro, Mich.
// ============================================================
export const hospitalariaProjects: Project[] = [
  {
    id: 1,
    title: "Quirófano y Zona Blanca",
    category: "Arquitectura Hospitalaria",
    description:
      "Diseño de quirófano con zona blanca bajo normativa hospitalaria: lámparas cialíticas, equipamiento especializado y acabados sanitarios.",
    image: `${R}/salud/quirofano_fotorrealista.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 2,
    title: "Sala de Hemodiálisis",
    category: "Arquitectura Hospitalaria",
    description:
      "Sala de diálisis con estaciones individuales, iluminación natural controlada y circulaciones amplias para confort del paciente.",
    image: `${R}/salud/hemodialisis_final.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 3,
    title: "Zona de Quimioterapia",
    category: "Arquitectura Hospitalaria",
    description:
      "Área de quimioterapia y estación de enfermeras, diseñada para crear un ambiente cálido y tranquilizador durante el tratamiento.",
    image: `${R}/salud/render_quimioterapia_mejorado.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 4,
    title: "Recepción de Urgencias",
    category: "Arquitectura Hospitalaria",
    description:
      "Lobby y recepción de urgencias con sala de espera, señalética clara y materiales nobles que transmiten confianza al ingreso.",
    image: `${R}/salud/lobby_recepcion_urgencias_espanol.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 5,
    title: "Laboratorio de Patología",
    category: "Arquitectura Hospitalaria",
    description:
      "Laboratorio clínico con mobiliario técnico, superficies higiénicas y distribución funcional para flujos de trabajo especializados.",
    image: `${R}/salud/laboratorio_patologia_fotorrealista.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 6,
    title: "Consultorio con Área de Examinación",
    category: "Arquitectura Hospitalaria",
    description:
      "Consultorio médico que integra zona de consulta y área de examinación, optimizando el espacio sin perder privacidad.",
    image: `${R}/salud/medical_office_render.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 7,
    title: "Consultorio Médico",
    category: "Arquitectura Hospitalaria",
    description:
      "Consultorio médico de líneas limpias y paleta serena, pensado para una experiencia profesional y acogedora.",
    image: `${R}/salud/consultorio_examen_photorealistic.png`,
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 8,
    title: "Fachada e Imagen Urbana del Hospital",
    category: "Arquitectura Hospitalaria",
    description:
      "Propuesta de fachada e integración urbana del conjunto hospitalario, con lenguaje arquitectónico contemporáneo de identidad mexicana.",
    image: `${R}/salud/render_arquitectonico_mexicano.png`,
    images: [
      `${R}/salud/render_arquitectonico_mexicano.png`,
      `${R}/salud/render_hospital_mexicano.png`,
    ],
    location: "Hospital Materno Fetal — Pátzcuaro, Mich.",
    tipoIntervencion: "Diseño y proyección",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 9,
    title: "Clínica Dental — Estudio Isométrico",
    category: "Arquitectura Hospitalaria",
    description:
      "Diorama isométrico de clínica dental que muestra la distribución integral del consultorio y sus áreas de servicio.",
    image: `${R}/salud/diorama_clinica_dental_completa.png`,
    images: [
      `${R}/salud/diorama_clinica_dental_completa.png`,
      `${R}/salud/diorama_consultorio_dental.png`,
    ],
    location: "Consultorio Dental",
    tipoIntervencion: "Diseño y ejecución",
    software: ["SketchUp"],
    alcancesGraficos: ["Planimetrías", "Modelado 3D con SketchUp", "Isométricos"],
  },
];

// ============================================================
// DISEÑO RESIDENCIAL
// ============================================================
export const residencialProjects: Project[] = [
  {
    id: 10,
    title: "Recámara Principal — Casa Modelo",
    category: "Diseño Residencial",
    description:
      "Recámara principal con paleta cálida, iluminación ambiental e integración con áreas exteriores para una casa modelo.",
    image: `${R}/residencial/render_recamara_principal.png`,
    location: "Casa Modelo Fraccionamiento — Zamora, Mich.",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 11,
    title: "Recámara Secundaria — Casa Modelo",
    category: "Diseño Residencial",
    description:
      "Recámara secundaria luminosa con salida a terraza, mobiliario equilibrado y acabados confortables.",
    image: `${R}/residencial/render_recamara_secundaria.png`,
    location: "Casa Modelo Fraccionamiento — Zamora, Mich.",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 12,
    title: "Cocina y Comedor — Casa Modelo",
    category: "Diseño Residencial",
    description:
      "Cocina y comedor con vista a jardín, integrando barra desayunadora y mobiliario a medida en un espacio social abierto.",
    image: `${R}/residencial/kitchen_dining_render.png`,
    location: "Casa Modelo Fraccionamiento — Zamora, Mich.",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 13,
    title: "Sala de Estar — Casa Modelo",
    category: "Diseño Residencial",
    description:
      "Sala de estar contemporánea con muro texturizado, doble altura y conexión visual hacia el resto de la vivienda.",
    image: `${R}/residencial/modern_living_room_render.png`,
    location: "Casa Modelo Fraccionamiento — Zamora, Mich.",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 14,
    title: "Sala de Televisión — Segundo Piso",
    category: "Diseño Residencial",
    description:
      "Sala de TV en planta alta con doble altura sobre escalera, materiales cálidos y un ambiente íntimo de descanso.",
    image: `${R}/residencial/tv_room_render.png`,
    location: "Casa Modelo Fraccionamiento — Zamora, Mich.",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 15,
    title: "Cocina Desayunador",
    category: "Diseño Residencial",
    description:
      "Espacio de cocina con barra desayunadora, carpintería en madera clara y diseño funcional para el día a día.",
    image: `${R}/residencial/render_cocina_desayunador.png`,
    location: "Proyecto Residencial — Michoacán",
    tipoIntervencion: "Diseño y ejecución",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 16,
    title: "Dormitorio de Lujo",
    category: "Diseño Residencial",
    description:
      "Dormitorio de lujo con paneles de madera, iluminación de acento y atmósfera nocturna fotorrealista.",
    image: `${R}/residencial/dormitorio_lujo_photorealistic.png`,
    images: [
      `${R}/residencial/dormitorio_lujo_photorealistic.png`,
      `${R}/residencial/dormitorio_lujo_noche.png`,
    ],
    location: "Proyecto Residencial — Michoacán",
    tipoIntervencion: "Diseño",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
      "Iluminación avanzada",
    ],
  },
  {
    id: 17,
    title: "Interior de Estilo Mexicano",
    category: "Diseño Residencial",
    description:
      "Diseño interior con elementos mexicanos contemporáneos, integrando comedor, cocina y estancia en un solo lenguaje.",
    image: `${R}/residencial/render_interior_mexicano.png`,
    location: "Proyecto Residencial — Michoacán",
    tipoIntervencion: "Diseño",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
      "Propuesta de materiales",
    ],
  },
  {
    id: 18,
    title: "Residencia Minimalista",
    category: "Diseño Residencial",
    description:
      "Fachada de residencia minimalista con volúmenes limpios, materiales mixtos e integración paisajística.",
    image: `${R}/residencial/render_residencia_minimalista.png`,
    images: [
      `${R}/residencial/render_residencia_minimalista.png`,
      `${R}/residencial/render_residencia_minimalista_v2.png`,
    ],
    location: "Proyecto Residencial — Michoacán",
    tipoIntervencion: "Diseño",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
      "Diseño de fachada",
    ],
  },
];

// ============================================================
// COMERCIAL & HOSPITALIDAD
// ============================================================
export const comercialProjects: Project[] = [
  {
    id: 19,
    title: "Cafetería / Bar Ahumada #18",
    category: "Comercial & Hospitalidad",
    description:
      "Remodelación de cafetería y bar con doble ambiente: interior cálido y atmosférico, y terraza con muro de ladrillo y vegetación.",
    image: `${R}/comercial/bistro_cafe_render.png`,
    images: [
      `${R}/comercial/bistro_cafe_render.png`,
      `${R}/comercial/bistro_cafe_daylight_render.png`,
      `${R}/comercial/mexican_cafe_terrace_render.png`,
      `${R}/comercial/mexican_cafe_terrace_night_render.png`,
    ],
    location: "Ahumada #18 — Pátzcuaro, Mich.",
    tipoIntervencion: "Remodelación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 20,
    title: "Habitación Tipo — Hotel Punta Galería",
    category: "Comercial & Hospitalidad",
    description:
      "Diseño de habitación tipo para hotel, con acento de color, baño integrado y atmósfera de hospitalidad de lujo.",
    image: `${R}/comercial/hotel_room_render.png`,
    location: "Hotel Punta Galería",
    tipoIntervencion: "Diseño",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
  {
    id: 21,
    title: "Joyería Pantera Rosa",
    category: "Comercial & Hospitalidad",
    description:
      "Diseño y ejecución de local comercial de joyería, con vitrinas iluminadas, mobiliario a medida en tonos rosa y dorado, e imagen de marca integrada.",
    image: `${R}/joyeria/render_boutique_joyeria.png`,
    location: "Joyería Pantera Rosa — Local Comercial",
    tipoIntervencion: "Diseño y ejecución",
    software: ["Revit", "3ds Max", "V-Ray", "SketchUp"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
      "Diseño de mobiliario",
    ],
  },
];

// ============================================================
// PATRIMONIO & ESPACIO COMERCIAL
// ============================================================
export const patrimonioProjects: Project[] = [
  {
    id: 22,
    title: "Plaza Madero — Edificio Histórico",
    category: "Patrimonio & Espacio Comercial",
    description:
      "Remodelación y cambio de uso de un edificio histórico a plaza comercial: kioscos modulares de madera integrados bajo las arcadas coloniales, respetando el patrimonio del inmueble.",
    image: `${R}/patrimonio/render_kiosco_tecnologia.png`,
    images: [
      `${R}/patrimonio/render_kiosco_tecnologia.png`,
      `${R}/patrimonio/render_patio_colonial_kioscos.png`,
    ],
    location: "Plaza Madero — Centro Histórico",
    tipoIntervencion: "Diseño, edificación y dirección",
    software: ["Revit", "3ds Max", "V-Ray", "Twinmotion"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
      "Recorrido virtual con Twinmotion",
    ],
  },
];

// ============================================================
// ARQUITECTURA PARA EVENTOS
// ============================================================
export const eventosProjects: Project[] = [
  {
    id: 23,
    title: 'Salón de Fiestas "El Faisán"',
    category: "Arquitectura para Eventos",
    description:
      "Diseño y edificación de salón de fiestas al aire libre, con terrazas, pérgolas y áreas ajardinadas frente al paisaje tropical.",
    image: `${R}/comercial/render_tropical_mexicano.png`,
    images: [
      `${R}/comercial/render_tropical_mexicano.png`,
      `${R}/comercial/render_terraza_privada.png`,
    ],
    location: "Huatulco, Oaxaca",
    tipoIntervencion: "Diseño y edificación",
    software: ["Revit", "3ds Max", "V-Ray"],
    alcancesGraficos: [
      "Planimetrías",
      "Modelado 3D con Revit",
      "Renderización 3ds Max con V-Ray",
    ],
  },
];

// Array completo
export const projects: Project[] = [
  ...hospitalariaProjects,
  ...residencialProjects,
  ...comercialProjects,
  ...patrimonioProjects,
  ...eventosProjects,
];

// Categorías para el filtro
export const categories = [
  "Todos",
  "Arquitectura Hospitalaria",
  "Diseño Residencial",
  "Comercial & Hospitalidad",
  "Patrimonio & Espacio Comercial",
  "Arquitectura para Eventos",
] as const;
