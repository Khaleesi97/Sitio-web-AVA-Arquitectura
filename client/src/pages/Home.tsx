import { Link } from "wouter";
import FadeInUp from "../components/FadeInUp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#303030] pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/renders/residencial/dormitorio_lujo_noche.png" 
            alt="AVA Arquitectura" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#303030]/80"></div>
        </div>

        <div className="container relative z-10 text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: "'Montserrat', sans-serif"}}>
              AVA <span className="text-primary">ARQUITECTURA</span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light" style={{fontFamily: "'Poppins', sans-serif"}}>
              Arquitectura, Visualización y Gestión Técnica. 
              Elevando proyectos a través de la precisión y el diseño.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:translate-x-4">
              <Link href="/proyectos" className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg inline-block" style={{fontFamily: "'Montserrat', sans-serif"}}>
                Ver Proyectos
              </Link>
              <Link href="/contacto" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all inline-block" style={{fontFamily: "'Montserrat', sans-serif"}}>
                Contáctanos
              </Link>
            </div>
          </FadeInUp>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Arquitectura y Diseño con Propósito</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En AVA Arquitectura, transformamos visiones en realidades tangibles. Nos especializamos en la integración de diseño arquitectónico, visualización avanzada y gestión técnica para garantizar la excelencia en cada proyecto.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <img 
                src="/renders/residencial/modern_living_room_render.png" 
                alt="AVA Arquitectura Render" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Nuestra Filosofía</h3>
                <p className="text-muted-foreground mb-6">
                  Creemos que cada espacio cuenta una historia. Nuestro enfoque combina la estética contemporánea con la precisión técnica, asegurando que cada detalle, desde la cuantificación hasta el render final, cumpla con los más altos estándares.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Excelencia en Visualización</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Gestión Técnica Rigurosa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Compromiso con el Cliente</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Galería de Proyectos</h2>
              <p className="text-lg text-muted-foreground">Una selección de nuestros trabajos más destacados</p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeInUp>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[300px]">
                <img src="/renders/salud/quirofano_fotorrealista.png" alt="Arquitectura Hospitalaria" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[300px]">
                <img src="/renders/comercial/bistro_cafe_render.png" alt="Comercial y Hospitalidad" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[300px]">
                <img src="/renders/patrimonio/render_patio_colonial_kioscos.png" alt="Patrimonio" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/proyectos" className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-all inline-block" style={{fontFamily: "'Montserrat', sans-serif"}}>
                Ver Todos los Proyectos
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
