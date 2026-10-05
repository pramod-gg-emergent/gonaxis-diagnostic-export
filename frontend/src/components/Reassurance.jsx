import { motion } from "framer-motion";
import { Building2, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const BENEFITS = [
  {
    icon: Zap,
    title: "Simple à utiliser",
    description: "Prise en main immédiate, sans compétence technique.",
    tone: "bg-teal-50 text-[#0D9488]",
  },
  {
    icon: Building2,
    title: "Pensé pour les TPE",
    description: "Conçu pour le quotidien des artisans, commerçants et restaurateurs.",
    tone: "bg-sky-50 text-sky-600",
  },
  {
    icon: TrendingUp,
    title: "Résultats concrets",
    description: "Des heures gagnées et des marges préservées dès le premier mois.",
    tone: "bg-orange-50 text-[#FF6B4B]",
  },
  {
    icon: ShieldCheck,
    title: "Technologie sans complexité",
    description: "Des outils puissants, derrière une interface claire et humaine.",
    tone: "bg-teal-50 text-teal-700",
  },
];

export const Reassurance = () => {
  return (
    <section
      data-testid="reassurance-section"
      className="border-y border-slate-200/70 bg-white/60 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                data-testid={`reassurance-card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 sm:p-5"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${benefit.tone} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="font-display block text-base font-bold text-[#0B192C]">
                    {benefit.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                    {benefit.description}
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
