import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const REASSURANCE_POINTS = ["5 minutes", "Sans engagement", "Pensé pour les petites entreprises"];

export const Hero = () => {
  return (
    <section
      id="accueil"
      data-testid="hero-section"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.12)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,107,75,0.08)_0%,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.div variants={item}>
            <span
              data-testid="hero-motto-badge"
              className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D9488]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Plus de temps. Plus d'argent.
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            data-testid="hero-title"
            className="font-display mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0B192C] sm:text-5xl lg:text-6xl"
          >
            Les petites entreprises méritent les{" "}
            <span className="text-gradient-brand">mêmes outils que les grandes.</span>
          </motion.h1>

          <motion.p
            variants={item}
            data-testid="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            GONAXIS aide les TPE et PME à récupérer du temps, réduire les pertes et
            travailler plus efficacement grâce à des outils simples, intelligents et
            adaptés à leur réalité.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostic"
              data-testid="cta-hero-diagnostic"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B4B] to-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-200 hover:scale-[1.03] hover:from-[#E05335] hover:to-[#EA580C] active:scale-[0.98]"
            >
              Faire mon diagnostic
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#comment-ca-marche"
              data-testid="cta-hero-decouvrir"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-base font-semibold text-[#0F2537] transition-all duration-200 hover:scale-[1.02] hover:border-[#0D9488] hover:text-[#0D9488] active:scale-[0.98]"
            >
              Découvrir GONAXIS
            </a>
          </motion.div>

          <motion.div
            variants={item}
            data-testid="hero-reassurance-line"
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
          >
            {REASSURANCE_POINTS.map((point) => (
              <span key={point} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#0D9488]" />
                {point}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
};
