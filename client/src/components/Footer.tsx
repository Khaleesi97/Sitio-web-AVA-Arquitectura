import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/renders/marca/logo-ava-blanco.png"
              alt="AVA Arquitectura"
              className="h-20 w-auto mb-4 -ml-2"
            />
            <p className="text-white/80">
              Transformamos visiones en realidades tangibles a través de la arquitectura, visualización y gestión técnica.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>arq.aranzazamora@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+52 (443) 241 4270</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Morelia, Michoacán</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} AVA Arquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
