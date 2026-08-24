"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
    title: "Cristalería",
    desc: "Vidrios templados, laminados y decorativos para interiores y exteriores. Corte a medida con acabado profesional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="2" y="4" width="20" height="16" rx="1" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <circle cx="7" cy="12" r="1" fill="currentColor" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Ventanas de Aluminio",
    desc: "Instalación y fabricación de ventanas de aluminio con perfiles de alta calidad, eficiencia térmica y acústica.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M4 4h4v16H4z" />
        <path d="M4 4l8-1v18l-8-1" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Puertas de Aluminio",
    desc: "Puertas de aluminio corredizas, abatibles y plegables. Diseño moderno y funcional para todo tipo de ambiente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="7" x2="21" y2="7" />
        <line x1="3" y1="11" x2="21" y2="11" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="3" y1="19" x2="21" y2="19" />
      </svg>
    ),
    title: "Divisiones de Vidrio",
    desc: "Divisiones para oficinas, baños y espacios comerciales. Ambientes modernos con privacidad y luminosidad.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Fachadas y Mamparas",
    desc: "Fachadas de vidrio y aluminio para edificios comerciales y residenciales. Proyectos llave en mano.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Proyectos a Medida",
    desc: "Diseñamos y ejecutamos proyectos especiales según las necesidades de cada cliente. Asesoría personalizada.",
  },
];

const stats = [
  { value: "500+", label: "Proyectos completados" },
  { value: "10+", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte disponible" },
];

const whyUs = [
  {
    title: "Materiales de calidad",
    desc: "Trabajamos con los mejores proveedores para garantizar durabilidad y acabados perfectos.",
  },
  {
    title: "Equipo profesional",
    desc: "Nuestros técnicos están altamente capacitados y certificados en cada especialidad.",
  },
  {
    title: "Presupuesto sin costo",
    desc: "Te ofrecemos una cotización detallada sin compromiso. Transparencia total en precios.",
  },
  {
    title: "Garantía en obra",
    desc: "Respaldamos cada instalación con garantía. Tu inversión siempre está protegida.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "", mensaje: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hola! Me llamo ${form.nombre}. Teléfono: ${form.telefono}. Servicio de interés: ${form.servicio}. ${form.mensaje}`;
    const url = `https://wa.me/14844731113?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Multiservicios" width={48} height={48} className="rounded-sm object-contain" />
              <div>
                <p className="font-bold text-lg leading-tight text-[#1a1a1a]">Multiservicios</p>
                <p className="text-xs text-[#4D4D4D] leading-tight">Proyectos, Materiales & Más</p>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-sm font-medium text-[#4D4D4D] hover:text-[#C41E1E] transition-colors">Servicios</a>
              <a href="#nosotros" className="text-sm font-medium text-[#4D4D4D] hover:text-[#C41E1E] transition-colors">Nosotros</a>
              <a href="#contacto" className="text-sm font-medium text-[#4D4D4D] hover:text-[#C41E1E] transition-colors">Contacto</a>
              <a href="#contacto" className="bg-[#C41E1E] hover:bg-[#a01515] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                Cotizar ahora
              </a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded text-[#1a1a1a]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            <a href="#servicios" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4D4D4D]">Servicios</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4D4D4D]">Nosotros</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4D4D4D]">Contacto</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="bg-[#C41E1E] text-white text-sm font-semibold px-5 py-2 rounded-full text-center">
              Cotizar ahora
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Red accent shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C41E1E] opacity-10 skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-1 bg-[#C41E1E]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C41E1E]/20 border border-[#C41E1E]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C41E1E] animate-pulse" />
              <span className="text-[#C41E1E] text-sm font-medium">Proyectos, Materiales & Más</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Soluciones en
              <span className="block text-[#C41E1E]">Vidrio & Aluminio</span>
              para tu proyecto
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Especialistas en cristalería, ventanas, puertas, divisiones y fachadas. Transformamos espacios con calidad, diseño y profesionalismo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-[#C41E1E] hover:bg-[#a01515] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-red-900/30">
                Solicitar cotización
              </a>
              <a href="#servicios" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full text-base transition-all">
                Ver servicios
              </a>
            </div>
          </div>

          {/* Logo card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C41E1E]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-12 flex flex-col items-center gap-4">
                <Image src="/logo.jpg" alt="Multiservicios logo" width={200} height={200} className="object-contain drop-shadow-2xl" />
                <div className="text-center">
                  <p className="text-white font-bold text-2xl">Multiservicios</p>
                  <p className="text-gray-400 text-sm">Proyectos, Materiales & Más</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#C41E1E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white text-4xl font-black">{s.value}</p>
                <p className="text-red-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C41E1E] font-semibold text-sm uppercase tracking-widest">Lo que hacemos</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2">Nuestros Servicios</h2>
            <p className="text-[#4D4D4D] mt-4 max-w-xl mx-auto">
              Ofrecemos soluciones integrales en vidrio y aluminio para proyectos residenciales, comerciales e industriales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#C41E1E]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#C41E1E]/10 group-hover:bg-[#C41E1E] flex items-center justify-center text-[#C41E1E] group-hover:text-white transition-all duration-300 mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{svc.title}</h3>
                <p className="text-[#4D4D4D] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C41E1E] font-semibold text-sm uppercase tracking-widest">¿Por qué elegirnos?</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-6">
                Experiencia y calidad
                <span className="block text-[#C41E1E]">en cada proyecto</span>
              </h2>
              <p className="text-[#4D4D4D] mb-8 leading-relaxed">
                En Multiservicios combinamos materiales de primera calidad con mano de obra especializada. Cada proyecto es único y lo tratamos con la atención que merece.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C41E1E] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] text-sm mb-1">{item.title}</h4>
                      <p className="text-[#4D4D4D] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C41E1E]/5 rounded-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Cristalería", bg: "bg-[#1a1a1a]", text: "text-white" },
                  { label: "Ventanas", bg: "bg-[#C41E1E]", text: "text-white" },
                  { label: "Aluminio", bg: "bg-gray-100", text: "text-[#1a1a1a]" },
                  { label: "Divisiones", bg: "bg-[#1a1a1a]", text: "text-white" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${item.bg} ${item.text} rounded-2xl p-8 flex items-center justify-center h-40 font-bold text-xl`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una cotización sin costo. Nuestro equipo está disponible para asesorarte.
          </p>
          <a href="#contacto" className="inline-block bg-[#C41E1E] hover:bg-[#a01515] text-white font-bold px-10 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg">
            Cotizar gratis
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#C41E1E] font-semibold text-sm uppercase tracking-widest">Contacto</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mt-2 mb-6">
                Hablemos de tu proyecto
              </h2>
              <p className="text-[#4D4D4D] mb-8 leading-relaxed">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad. También puedes escribirnos directamente por WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E1E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">Teléfono / WhatsApp</p>
                    <p className="text-[#4D4D4D] text-sm">+1 (484) 473-1113</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E1E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">Correo</p>
                    <p className="text-[#4D4D4D] text-sm">info@multiservicios.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C41E1E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">Ubicación</p>
                    <p className="text-[#4D4D4D] text-sm">La Romana, República Dominicana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Solicitar cotización</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1">Nombre</label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1">Teléfono</label>
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                      placeholder="Tu número"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C41E1E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1">Servicio de interés</label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C41E1E] transition-colors bg-white"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option>Cristalería</option>
                    <option>Ventanas de Aluminio</option>
                    <option>Puertas de Aluminio</option>
                    <option>Divisiones de Vidrio</option>
                    <option>Fachadas y Mamparas</option>
                    <option>Proyecto a Medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a1a1a] mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C41E1E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C41E1E] hover:bg-[#a01515] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.104 1.523 5.827L.057 23.486a.5.5 0 00.6.6l5.659-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.031-1.381l-.36-.214-3.732.967.988-3.61-.235-.372A9.8 9.8 0 012.182 12C2.182 6.57 6.569 2.182 12 2.182S21.818 6.57 21.818 12 17.431 21.818 12 21.818z" />
                  </svg>
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.jpg" alt="Multiservicios" width={40} height={40} className="rounded-sm object-contain" />
                <div>
                  <p className="font-bold text-white">Multiservicios</p>
                  <p className="text-xs text-gray-400">Proyectos, Materiales & Más</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especialistas en vidrio y aluminio. Tu proyecto, nuestra misión.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Cristalería", "Ventanas de Aluminio", "Puertas de Aluminio", "Divisiones de Vidrio", "Fachadas y Mamparas"].map((s) => (
                  <li key={s}>
                    <a href="#servicios" className="hover:text-[#C41E1E] transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+1 (484) 473-1113</li>
                <li>info@multiservicios.com</li>
                <li>La Romana, República Dominicana</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Multiservicios. Todos los derechos reservados.</p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#C41E1E]" />
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
