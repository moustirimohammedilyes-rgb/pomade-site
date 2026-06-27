"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Product3D() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, -5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1.05, 1, 0.9]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div
      ref={ref}
      style={{ rotateY, rotateX, scale }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto perspective-[1000px]"
    >
      <Image
        src="/logo.png"
        alt="Datélys by I&C"
        fill
        className="object-contain drop-shadow-2xl"
        priority
      />
    </motion.div>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP = "https://wa.me/213774925080";
const PHONE = "0774925080";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61590854855956";
const INSTAGRAM = "https://www.instagram.com/datelys__";

const benefits = [
  { icon: "✨", title: "Anti-rides visible", desc: "Réduit visiblement les rides et ridules dès les premières semaines d'utilisation régulière." },
  { icon: "💧", title: "Hydratation profonde", desc: "Nourrit la peau en profondeur grâce aux huiles naturelles extraites des noyaux de dattes." },
  { icon: "🌿", title: "100% naturel", desc: "Formulée sans produits chimiques, sans parabènes, sans sulfates. Pureté garantie." },
  { icon: "🛡️", title: "Protection antioxydante", desc: "Les polyphénols des dattes protègent la peau contre les radicaux libres et le vieillissement." },
  { icon: "🌸", title: "Éclat du teint", desc: "Restaure l'éclat naturel de votre peau pour un teint lumineux et uniforme." },
  { icon: "🔬", title: "Testé dermatologiquement", desc: "Convient à tous les types de peau, même les plus sensibles. Tolérance cutanée prouvée." },
];

const ingredients = [
  { name: "Poudre de noyaux de dattes", desc: "Poudre naturelle riche en antioxydants et en minéraux, elle exfolie délicatement la peau et stimule le renouvellement cellulaire pour un teint frais et lumineux." },
  { name: "Miel", desc: "Agent hydratant et antibactérien naturel, le miel nourrit la peau en profondeur, apaise les irritations et laisse un toucher doux et soyeux." },
  { name: "Huile de noyaux de dattes", desc: "Huile précieuse extraite à froid, riche en acides gras essentiels et en vitamines, elle régénère la peau et combat les signes du vieillissement." },
  { name: "Vitamine E", desc: "Puissant antioxydant qui protège la peau des radicaux libres, prévient le vieillissement prématuré et renforce la barrière cutanée naturelle." },
];

const testimonials = [
  { name: "Samira B.", text: "Après un mois d'utilisation, ma peau est visiblement plus ferme et lumineuse. Je recommande à 100% !", stars: 5 },
  { name: "Nadia M.", text: "Enfin une crème naturelle qui donne de vrais résultats. Mes rides se sont estompées considérablement.", stars: 5 },
  { name: "Fatima Z.", text: "La texture est légère et pénètre rapidement. Mon teint est beaucoup plus uniforme depuis que je l'utilise.", stars: 5 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-light">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-beige-light/90 backdrop-blur-md border-b border-maroon-100/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Datélys" width={36} height={36} className="object-contain" />
            <span className="font-semibold text-maroon text-lg tracking-wide">Datélys by I&C</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-maroon/70">
            <a href="#about" className="hover:text-gold transition-colors">À propos</a>
            <a href="#benefits" className="hover:text-gold transition-colors">Bienfaits</a>
            <a href="#ingredients" className="hover:text-gold transition-colors">Ingrédients</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Témoignages</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon text-beige-light text-sm px-5 py-2 rounded-full hover:bg-maroon-light transition-colors"
          >
            Commander
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Datélys by I&C</p>
            <h1 className="text-4xl md:text-6xl font-bold text-maroon leading-tight">
              Crème Anti-Âge<br />Naturelle
            </h1>
            <p className="text-lg md:text-xl text-maroon/60 font-light tracking-wide mt-4">
              Éclat, jeunesse, 100% naturel
            </p>
            <p className="text-maroon/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              À base de noyaux de dattes, découvrez le secret naturel pour une peau jeune et éclatante.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-maroon text-beige-light px-8 py-3 rounded-full text-sm font-medium hover:bg-maroon-light transition-colors flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Commander via WhatsApp
              </a>
              <a
                href="#about"
                className="border border-maroon/20 text-maroon px-8 py-3 rounded-full text-sm font-medium hover:bg-maroon/5 transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </FadeIn>
          <div className="mt-16">
            <Product3D />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-beige/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">Le pouvoir des noyaux de dattes</h2>
            <p className="text-maroon/60 leading-relaxed max-w-2xl mx-auto">
              Datélys by I&C est née d&apos;une conviction : la nature recèle les meilleurs secrets pour la beauté.
              Notre crème anti-âge est formulée à partir d&apos;un ingrédient ancestral et méconnu — les noyaux de dattes —
              riches en antioxydants, en vitamines et en acides gras essentiels. Chaque pot est le fruit d&apos;un savoir-faire
              artisanal, alliant tradition et recherche pour offrir à votre peau le meilleur de la nature algérienne.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Pourquoi Datélys</p>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon">Bienfaits prouvés</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-maroon-100/20 hover:shadow-lg hover:shadow-gold/5 transition-shadow">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="text-maroon font-semibold mt-3 mb-2">{b.title}</h3>
                  <p className="text-maroon/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" className="py-20 px-6 bg-beige/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Transparence</p>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon">Nos ingrédients</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ingredients.map((ing, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-maroon-100/20">
                  <h3 className="text-gold font-semibold text-lg mb-2">{ing.name}</h3>
                  <p className="text-maroon/50 text-sm leading-relaxed">{ing.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Avis clients</p>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon">Ce qu&apos;elles disent</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-maroon-100/20">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-gold text-sm">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-maroon/60 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-maroon font-medium text-sm">{t.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-maroon text-beige-light">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prête à retrouver votre éclat ?</h2>
            <p className="text-beige/60 mb-8 text-sm leading-relaxed">
              Commandez dès maintenant et recevez votre crème Datélys directement chez vous.
              Livraison disponible partout en Algérie.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-maroon px-8 py-3 rounded-full font-medium hover:bg-gold-light transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Commander sur WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-beige/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">Restons en contact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon">Contactez-nous</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl p-7 border border-maroon-100/20">
                <div className="w-12 h-12 bg-maroon/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <h3 className="text-maroon font-semibold mb-1 text-sm">Téléphone</h3>
                <a href={`tel:+213${PHONE}`} className="text-maroon/50 text-sm hover:text-gold transition-colors">{PHONE}</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-7 border border-maroon-100/20">
                <div className="w-12 h-12 bg-maroon/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WhatsAppIcon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-maroon font-semibold mb-1 text-sm">WhatsApp</h3>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-maroon/50 text-sm hover:text-gold transition-colors">{PHONE}</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-7 border border-maroon-100/20">
                <div className="w-12 h-12 bg-maroon/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-maroon font-semibold mb-1 text-sm">Réseaux sociaux</h3>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-maroon/40 hover:text-gold transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-maroon/40 hover:text-gold transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-maroon text-beige-light/50 text-center text-xs">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><InstagramIcon className="w-4 h-4" /></a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><FacebookIcon className="w-4 h-4" /></a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><WhatsAppIcon className="w-4 h-4" /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Datélys by I&C. Tous droits réservés.</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
        aria-label="Commander sur WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </main>
  );
}
