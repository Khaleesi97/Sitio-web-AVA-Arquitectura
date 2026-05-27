import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import FadeInUp from "../components/FadeInUp";

const WHATSAPP_NUMBER = "524432414270";

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Hola, soy ${form.nombre}.%0A` +
      `Asunto: ${form.asunto}%0A` +
      `${form.mensaje}%0A` +
      (form.email ? `Mi correo: ${form.email}` : "");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        texto.replace(/%0A/g, "\n")
      )}`,
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 bg-background min-h-screen pt-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a llevarlo al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInUp>
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm h-full">
              <h2 className="text-2xl font-bold mb-8 text-primary">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Correo Electrónico</p>
                    <a href="mailto:arq.aranzazamora@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">arq.aranzazamora@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">WhatsApp Business</p>
                    <a href="https://wa.me/524432414270" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+52 443 241 4270</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Morelia, Michoacán, México</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary/5 rounded-lg border border-border/50">
                <p className="text-sm italic text-muted-foreground text-center">
                  "La arquitectura es la voluntad de una época traducida a espacio."
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Nombre</label>
                  <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Asunto</label>
                <input type="text" name="asunto" value={form.asunto} onChange={handleChange} className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="¿En qué podemos ayudarte?" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className="w-full p-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-md font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
