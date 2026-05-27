import { useState } from "react";

// Número de WhatsApp Business de AVA (formato internacional sin signos)
const WHATSAPP_NUMBER = "524432414270";
const DEFAULT_MESSAGE =
  "Hola, vi su página web y me gustaría más información sobre sus servicios de arquitectura.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Etiqueta que aparece al pasar el cursor */}
      <span
        className={`hidden sm:block bg-white text-[#303030] text-sm font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        ¡Escríbenos!
      </span>

      {/* Botón circular */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 group-hover:scale-110">
        {/* Pulso animado */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white relative z-10"
          aria-hidden="true"
        >
          <path d="M16.004 2.667C8.64 2.667 2.67 8.637 2.67 16c0 2.35.616 4.65 1.786 6.676L2.667 29.333l6.83-1.79A13.27 13.27 0 0016.004 29.3C23.367 29.3 29.337 23.33 29.337 15.97 29.337 8.637 23.367 2.667 16.004 2.667zm0 24.03a11.03 11.03 0 01-5.62-1.54l-.403-.24-4.05 1.062 1.08-3.95-.262-.405a11.01 11.01 0 01-1.69-5.857c0-6.103 4.965-11.067 11.07-11.067 2.957 0 5.736 1.153 7.825 3.244a10.99 10.99 0 013.242 7.83c0 6.104-4.965 11.068-11.067 11.068zm6.07-8.29c-.332-.166-1.967-.97-2.272-1.08-.305-.112-.527-.166-.75.166-.22.332-.86 1.08-1.054 1.302-.193.222-.388.25-.72.083-.332-.166-1.403-.517-2.673-1.65-.988-.88-1.655-1.967-1.85-2.3-.193-.332-.02-.51.146-.676.15-.148.332-.388.498-.582.166-.194.221-.333.332-.555.111-.222.055-.416-.028-.582-.083-.166-.75-1.806-1.027-2.474-.27-.65-.545-.562-.75-.572l-.638-.011c-.222 0-.582.083-.887.416-.305.332-1.165 1.137-1.165 2.774s1.193 3.22 1.359 3.442c.166.222 2.347 3.583 5.686 5.024.795.343 1.415.548 1.898.701.798.254 1.524.218 2.098.132.64-.096 1.967-.804 2.244-1.58.277-.776.277-1.44.194-1.58-.083-.138-.305-.221-.637-.387z" />
        </svg>
      </span>
    </a>
  );
}
